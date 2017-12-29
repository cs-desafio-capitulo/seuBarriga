import express from 'express';

import PaymentController from '../controllers';

const URL_PREFIX = '/payment';

export default express.Router()
  .post(`${URL_PREFIX}`, PaymentController.processPayment)
  .get(`${URL_PREFIX}/{:id}`, PaymentController.checkPaymentStatus)
  .all('*', PaymentController.notFound);
