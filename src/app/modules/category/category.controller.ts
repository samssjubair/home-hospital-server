import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoryFilterableFields } from './category.constants';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, categoryFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  const result = await CategoryService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CategoryService.updateById(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDb,
  deleteFromDB,
};
