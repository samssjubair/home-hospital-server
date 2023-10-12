import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './feedback.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});



const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review fetched successfully',
    data: result,
  });
});

const getReviewFromServiceId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ReviewService.getReviewFromServiceId(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review fetched successfully Using Service Id',
      data: result,
    });
  }
);

const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await ReviewService.updateById(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review deleted successfully',
    data: result,
  });
});

export const ReviewController = {
  insertIntoDB,
  getByIdFromDB,
  updateIntoDb,
  deleteFromDB,
  getReviewFromServiceId,
};
