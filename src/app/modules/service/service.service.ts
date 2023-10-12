/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma, Service } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';

import prisma from '../../../shared/prisma';
import {
  bookRelationalFields,
  bookRelationalFieldsMapper,
  studentSearchableFields
} from './service.constants';
import { IBookFilterRequest } from './service.interface';

const insertIntoDB = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllFromDB = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { size, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: studentSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (bookRelationalFields.includes(key)) {
          return {
            [bookRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        }
        else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  // if(filterData.category) {
  //   andConditions.push({
  //     categoryId: {
  //       id: filterData.category,
  //     },
  //   });
  // }

  

  const whereConditions: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.service.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      size,
      totalPage: Math.ceil(total / size),
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  return result;
};



const updateById = async (
  id: string,
  payload: Partial<Service>
): Promise<Service> => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Service> => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });
  return result;
};

export const HomeServiceService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
  // getBookFromCategoryId
};
