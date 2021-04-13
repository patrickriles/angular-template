import { Router } from 'express';
import * as HowserApi from '@howser/api';

/**
 * Declare and export the router
 */

const router = Router();
module.exports = router;

/**
 * Set router endpoints
 */

router.use('/user', HowserApi.api.user());

// Add more routes here
