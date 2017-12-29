import supertest from 'supertest';
import mongoose from 'mongoose';

import Payment from '../../../src/models';
import setupApp from '../../../src/app';

describe('Routes: Payment', () => {
  let request;

  before(async () => {
    const app = await setupApp();
    request = supertest(app);
  });

  const defaultPayment = {
    user: '123',
    order_id: '321',
  };

  beforeEach(async () => {
    const payment = new Payment(defaultPayment);
    await Payment.remove({});
    return payment.save();
  });

  after(() => {
    mongoose.connection.close();
  });

  // CREATE
  describe('POST /payment', () => {
    context('when posting a payment', () => {
      it('should return the payment information with status code 200', (done) => {
        const customId = '5a462cab6602e22b92b55a9d';
        const createdAt = (new Date()).toJSON();
        const newPayment = Object.assign(
          {},
          { _id: customId, __v: 0, created_at: createdAt },
          defaultPayment,
        );
        const expectedNewPayment = Object.assign(
          {},
          {
            status: 'pending',
            created_at: createdAt,
            _id: customId,
            __v: 0,
          },
          defaultPayment,
        );

        request
          .post('/payment')
          .send(newPayment)
          .expect(200, expectedNewPayment, done);
      });
    });
  });
});
