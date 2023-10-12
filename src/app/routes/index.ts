import express from 'express';
import { bookingRoutes } from '../modules/booking/booking.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { reviewRoutes } from '../modules/review/review.routes';
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
  {
    path: "/bookings",
    routes: bookingRoutes
  },
  {
    path: "/auth",
    routes: authRoutes
  },
  {
    path: "/reviews",
    routes: reviewRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
