import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(404).json({ message: 'Endereço não encontrado' }));

export default router;
