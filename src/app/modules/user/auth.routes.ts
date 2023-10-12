import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.post(
  '/login',
  validateRequest(UserValidation.loginSchema),
  UserController.loginUser
);

router.post(
  '/signup',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

export const authRoutes = router;
