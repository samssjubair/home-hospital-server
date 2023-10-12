import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validations';

const router = express.Router();

// router.get('/', ReviewController.getAllFromDB);

router.get('/:id', ReviewController.getByIdFromDB);
router.get('/:id/service', ReviewController.getReviewFromServiceId);

router.post(
  '/create-service',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ReviewValidation.create),
  ReviewController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ReviewValidation.update),
  ReviewController.updateIntoDb
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.deleteFromDB
);

export const reviewRoutes = router;
