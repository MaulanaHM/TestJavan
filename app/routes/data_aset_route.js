import express from 'express'

import { tambahAset, editAset, deleteAset } from '../controllers/data_aset_controller.js'

const router = express.Router();

router.post('/tambah-data-aset', tambahAset);
router.put('/edit-data-aset', editAset);
router.delete('/hapus-data-aset/:id', deleteAset);

export default router; 