
import { CMSContent } from '@prisma/client';

import prisma from '../../../shared/prisma';


const insertIntoDB = async (data: CMSContent): Promise<CMSContent> => {
  const result = await prisma.cMSContent.create({
    data,
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<CMSContent | null> => {
  const result = await prisma.cMSContent.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCMSUsingType = async (type: any): Promise<CMSContent[] | null> => {
  const result = await prisma.cMSContent.findMany({
    where: {
      contentType: type,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<CMSContent>
): Promise<CMSContent> => {
  const result = await prisma.cMSContent.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<CMSContent> => {
  const result = await prisma.cMSContent.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CMSService = {
  insertIntoDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
  getCMSUsingType,
};
