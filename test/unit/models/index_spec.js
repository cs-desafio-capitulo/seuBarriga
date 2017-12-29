import { expect } from 'chai';

import Payment from '../../../src/models';

describe('Model: Payment', () => {
    context('when an empty payment is passed', () => {
        const payment = new Payment();

        it('should be invalid if user is empty', () => {
            payment.validate((err) => {
                expect(err.errors.user).to.exist;
                done();
            });
        });

        it('should be invalid if order_id is empty', () => {
            payment.validate((err) => {
                expect(err.errors.order_id).to.exist;
                done();
            });
        });
    });
});