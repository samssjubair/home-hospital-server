import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getAllFromDB
);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getByIdFromDB);



router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateIntoDb
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.ADMIN),
    UserController.deleteFromDB
)

export const userRoutes = router;