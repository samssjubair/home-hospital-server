import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { homeServiceFilterableFields } from './service.constants';
import { HomeServiceService } from './service.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeServiceService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, homeServiceFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await HomeServiceService.getAllFromDB(filters as any, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeServiceService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service fetched successfully',
    data: result,
  });
});

const getServiceFromCategoryId= catchAsync(async (req: Request, res: Response)=>{
  const { id } = req.params;
  const result = await HomeServiceService.getServiceFromCategoryId(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service fetched successfully Using CategoryId',
    data: result,
  });
})

const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await HomeServiceService.updateById(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeServiceService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const ServiceController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDb,
  deleteFromDB,
  getServiceFromCategoryId,
};
