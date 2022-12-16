import express from 'express'

import { tambahKeluarga, editKeluarga, deleteKeluarga } from '../controllers/data_keluarga_controller.js'

const router = express.Router();

router.post('/tambah-data-keluarga', tambahKeluarga);
router.put('/edit-data-keluarga', editKeluarga);
router.delete('/hapus-data-keluarga/:id', deleteKeluarga);

export default router; 