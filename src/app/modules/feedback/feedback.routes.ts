import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackController } from './feedback.controller';
import { FeedbackValidation } from './feedback.validations';

const router = express.Router();

router.get('/', FeedbackController.getAllFeedback);

router.get('/:id', FeedbackController.getByIdFromDB);
// router.get('/', FeedbackController.getAllFeedback);

router.post(
  '/create-feedback',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(FeedbackValidation.create),
  FeedbackController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(FeedbackValidation.update),
  FeedbackController.updateIntoDb
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  FeedbackController.deleteFromDB
);

export const feedbackRoutes = router;
