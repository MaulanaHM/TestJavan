import express from 'express'

import { tambahAset } from '../controllers/data_aset_controller.js'

const router = express.Router();

router.post('/tambah-data-aset', tambahAset);
// router.put('/edit-data-keluarga', editKeluarga);
// router.delete('/hapus-data-keluarga/:id', deleteKeluarga);

export default router; 