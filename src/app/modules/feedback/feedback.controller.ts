import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback added successfully',
    data: result,
  });
});



const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FeedbackService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback fetched successfully',
    data: result,
  });
});

const getAllFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FeedbackService.getAllFeedback();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback fetched successfully ',
      data: result,
    });
  }
);

const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await FeedbackService.updateById(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FeedbackService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback deleted successfully',
    data: result,
  });
});

export const FeedbackController = {
  insertIntoDB,
  getByIdFromDB,
  updateIntoDb,
  deleteFromDB,
  getAllFeedback,
};
