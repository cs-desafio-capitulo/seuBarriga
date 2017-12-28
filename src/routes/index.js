import express from 'express';
import paymentRoutes from './payment';

const router = express.Router();

router.get('/', (req, res) => res.status(404).json({ message: 'Endereço não encontrado' }));

router.use('/payment', paymentRoutes);

export default router;
