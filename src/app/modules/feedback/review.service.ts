/* eslint-disable @typescript-eslint/no-explicit-any */
import { Review, Service } from '@prisma/client';

import prisma from '../../../shared/prisma';


const insertIntoDB = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
    include: {
      service: true,
      booking: true,
    },
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getReviewFromServiceId = async (id: string): Promise<Review[] | null> => {
  const result = await prisma.review.findMany({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<Review>
): Promise<Review> => {
  const result = await prisma.review.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Review> => {
  const result = await prisma.review.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ReviewService = {
  insertIntoDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
  getReviewFromServiceId
};
