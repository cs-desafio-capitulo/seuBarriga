class PaymentsController {
  constructor(Payment) {
    this.Payment = Payment;
  }

  /**
   * Responsible for processing a payment request
   * @param {*} req
   * @param {*} res
   */
  async processPayment(req, res) {
    return res.json('processPayment successfuly reached');
  }
}
export default PaymentsController;
