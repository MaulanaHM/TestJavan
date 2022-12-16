import express from 'express'

import { tambahKepemilikanAset, editKepemilikanAset } from '../controllers/data_kepemilikan_aset_controller.js'

const router = express.Router();

router.post('/tambah-kepemilikan-aset', tambahKepemilikanAset);
router.put('/edit-kepemilikan-aset', editKepemilikanAset);
// router.delete('/hapus-data-aset/:id', deleteAset);

export default router; 