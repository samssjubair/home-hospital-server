import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CMSService } from './cms.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CMSService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CMS Content added successfully',
    data: result,
  });
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CMSService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CMS Content fetched successfully',
    data: result,
  });
});

const getCMSUsingType = catchAsync(async (req: Request, res: Response) => {
  const { type } = req.params;
  const result = await CMSService.getCMSUsingType(type);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CMS Content fetched successfully Using CMS Type',
    data: result,
  });
});

const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CMSService.updateById(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CMS Content updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CMSService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CMS Content deleted successfully',
    data: result,
  });
});

export const CMSController = {
  insertIntoDB,
  getByIdFromDB,
  updateIntoDb,
  deleteFromDB,
  getCMSUsingType,
};
