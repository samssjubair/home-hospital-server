import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validations';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  BookingController.getAllFromDB
);

router.get('/:id', BookingController.getByIdFromDB);

router.post(
  '/create-booking',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(BookingValidation.create),
  BookingController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookingValidation.update),
  BookingController.updateIntoDb
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BookingController.deleteFromDB
);

export const bookingRoutes = router;
