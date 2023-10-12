import { Booking } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';

import prisma from '../../../shared/prisma';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: any): Promise<Booking> => {
  const result = await prisma.booking.create({
    data
  });
  return result;
};

// const insertIntoDB = async (data: Order): Promise<Order> => {
//   const result = await prisma.order.create({
//     data: {
//       ...data,
//       orderedBooks: {
//         data.ordererBooks
//       },
//     },
//   });
//   return result;
// };

const getAllFromDB = async (
  role: string | null,
  userId: string | null
): Promise<IGenericResponse<Booking[]>> => {
  let result: Booking[] = [];

  if (role === 'admin') {
    // If the role is 'admin', fetch all orders
    result = await prisma.booking.findMany();
  } else if (role === 'customer' && userId) {
    // If the role is 'customer' and userId is provided, fetch orders for that user
    result = await prisma.booking.findMany({
      where: {
        userId: userId,
      },
    });
  }

  return {
    data: result,
  };
};


const getByIdFromDB = async (id: string): Promise<Booking | null> => {
  const result = await prisma.booking.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<Booking>
): Promise<Booking> => {
  const result = await prisma.booking.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Booking> => {
  const result = await prisma.booking.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookingService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
};
