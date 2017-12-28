import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
    enum: ['approved', 'pending', 'denied'],
    default: 'pending',
  },
});

export default mongoose.model('Payment', PaymentSchema);
