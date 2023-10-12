import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CMSController } from './cms.controller';
import { CMSValidation } from './cms.validations';

const router = express.Router();

// router.get('/', CMSController.getAllFromDB);

router.get('/:id', CMSController.getByIdFromDB);
router.get('/:type/cms', CMSController.getCMSUsingType);

router.post(
  '/create-cms',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CMSValidation.create),
  CMSController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CMSValidation.update),
  CMSController.updateIntoDb
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CMSController.deleteFromDB
);

export const cmsRoutes = router;
