import express from 'express'

import { tambahKepemilikanAset, editKepemilikanAset, deleteKepemilikanAset } from '../controllers/data_kepemilikan_aset_controller.js'

const router = express.Router();

router.post('/tambah-kepemilikan-aset', tambahKepemilikanAset);
router.put('/edit-kepemilikan-aset', editKepemilikanAset);
router.delete('/hapus-kepemilikan-aset/:id', deleteKepemilikanAset);

export default router; 