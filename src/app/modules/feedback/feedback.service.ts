/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserFeedback } from '@prisma/client';

import prisma from '../../../shared/prisma';


const insertIntoDB = async (data: UserFeedback): Promise<UserFeedback> => {
  const result = await prisma.userFeedback.create({
    data
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<UserFeedback | null> => {
  const result = await prisma.userFeedback.findUnique({
    where: {
      id,
    },
    include:{
      user:true
    }
  });
  return result;
};

const getAllFeedback = async (): Promise<UserFeedback[] | null> => {
  const result = await prisma.userFeedback.findMany({include: {user: true}});
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<UserFeedback>
): Promise<UserFeedback> => {
  const result = await prisma.userFeedback.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<UserFeedback> => {
  const result = await prisma.userFeedback.delete({
    where: {
      id,
    },
  });
  return result;
};

export const FeedbackService = {
  insertIntoDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
  getAllFeedback,
};
