import { Book, Order } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';

import prisma from '../../../shared/prisma';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: any): Promise<Order> => {
  const result = await prisma.order.create({
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
): Promise<IGenericResponse<Order[]>> => {
  let result: Order[] = [];

  if (role === 'admin') {
    // If the role is 'admin', fetch all orders
    result = await prisma.order.findMany();
  } else if (role === 'customer' && userId) {
    // If the role is 'customer' and userId is provided, fetch orders for that user
    result = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });
  }

  return {
    data: result,
  };
};


const getByIdFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Order> => {
  const result = await prisma.order.delete({
    where: {
      id,
    },
  });
  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateById,
  deleteFromDB,
};
