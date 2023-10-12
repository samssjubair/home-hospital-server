import express from 'express';
import { categoryRoutes } from '../modules/category/category.routes';
import { serviceRoutes } from '../modules/service/service.routes';
import { authRoutes } from '../modules/user/auth.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: userRoutes
  },
  {
    path: "/categories",
    routes: categoryRoutes
  },
  {
    path: "/services",
    routes: serviceRoutes
  },
  // {
  //   path: "/orders",
  //   routes: orderRoutes
  // },
  {
    path: "/auth",
    routes: authRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
