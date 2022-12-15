import express from 'express'

import { tambahKeluarga } from '../controllers/data_keluarga_controller.js'

const router = express.Router();

router.post('/tambah-data-keluarga', tambahKeluarga);

export default router; 