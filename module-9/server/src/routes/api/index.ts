import { Router } from 'express';
const router = Router();
import dotenv from 'dotenv';
dotenv.config();

import weatherRoutes from './weatherRoutes.js';

router.use('/weather', weatherRoutes);

export default router;
