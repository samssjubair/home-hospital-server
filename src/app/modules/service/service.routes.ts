import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceController } from './service.controller';
import { ServiceValidation } from './service.validations';

const router = express.Router();

router.get(
  '/',
  ServiceController.getAllFromDB
);

router.get('/:id', ServiceController.getByIdFromDB);
router.get('/:id/category', ServiceController.getServiceFromCategoryId);

router.post(
  '/create-service',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ServiceValidation.create),
  ServiceController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ServiceValidation.update),
  ServiceController.updateIntoDb
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteFromDB
);

export const serviceRoutes = router;
