import express from 'express';
import PaymentController from '../controllers/payments';
import Payment from '../models/payment';

const router = express.Router();
const paymentController = new PaymentController(Payment);

router
  .post('/', (req, res) => paymentController.processPayment(req, res));

export default router;
