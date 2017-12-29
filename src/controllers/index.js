import Payment from '../models';

export const PaymentsController = PaymentObject => ({
  async processPayment(req, res) {
    try {
      const payment = new PaymentObject(req.body);
      await payment.save();
      res.status(200).send(payment);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  async checkPaymentStatus(req, res) {
    try {
      const payment = await PaymentObject.find({ _id: req.param.id });
      res.status(200).send(payment);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  notFound(req, res) {
    res.sendStatus(404);
  },
});

export default PaymentsController(Payment);
