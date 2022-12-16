import { buatKepemilikanAset, ubahDataKepemilikanAset, hapusDataKepemilikanAset, getAllDataKepemilikanAset } from '../models/data_kepemilikan_model.js'
import { hargaAset } from '../helper/dummy_aset.js';
import qs from 'qs'

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} role array
 */
 
 const tambahKepemilikanAset = async (req, res) => {
    const dataUtama = req.body;

    try {
        const dataKepemilikanAset = await buatKepemilikanAset(dataUtama);
        if (dataKepemilikanAset) {
            return res.status(201).send({
                status: 201,
                message: "Berhasil menambah kepemilikan aset",
                data: dataKepemilikanAset
            })
        } else {
            return res.status(500).send({
                status: 500,
                error: 'Internal server error',
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            status: 500,
            error: 'Internal server error',
        });
    }
 }

 const editKepemilikanAset = async (req, res) => {
    const dataUtama = req.body;

    try {
        const newDataKepemilikanAset = await ubahDataKepemilikanAset(dataUtama);
        if (newDataKepemilikanAset) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil mengubah kepemilikan aset",
                data: newDataKepemilikanAset
            })
        } else {
            return res.status(500).send({
                status: 500,
                error: 'Internal server error',
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            status: 500,
            error: 'Internal server error',
        });
    }
 }

 const deleteKepemilikanAset = async (req, res) => {
    const idDataAset = req.params.id;

    try {
        const newDataKepemilikanAset = await hapusDataKepemilikanAset(idDataAset);
        if (newDataKepemilikanAset) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil menghapus kepemilikan aset",
                data: newDataKepemilikanAset
            })
        } else {
            return res.status(500).send({
                status: 500,
                error: 'Internal server error',
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            status: 500,
            error: 'Internal server error',
        });
    }
 }

 const getKepemilikanAset = async (req, res) => {

    try {
        const dataKepemilikanAset = await getAllDataKepemilikanAset()
        if (dataKepemilikanAset) {

            for (let d = 0; d < dataKepemilikanAset.length; d++) {
                let namaAset = dataKepemilikanAset[d].nama_aset
                let dataHargaAset
                if (dataKepemilikanAset[d].nama_aset != null) {
                    dataHargaAset = await hargaAset(namaAset)
                    dataKepemilikanAset[d].aset = dataHargaAset
                } else {
                    dataKepemilikanAset[d].aset = 0
                }
            }

            var result = [];
            dataKepemilikanAset.reduce(function (res, value) {
                if (!res[value.id_data_keluarga]) {
                    res[value.id_data_keluarga] = { 
                        id_data_keluarga: value.id_data_keluarga,
                        nama_keluarga: value.nama_keluarga, 
                        aset: 0 };
                    result.push(res[value.id_data_keluarga])
                }
                res[value.id_data_keluarga].aset += value.aset;
                return res;
            }, {});

            return res.status(200).send({
                status: 200,
                data: result
            })
        } else if (dataKepemilikanAset = 404) {

        } else {

        }
    } catch {

    }
 }
 
 export {
    tambahKepemilikanAset,
    editKepemilikanAset,
    deleteKepemilikanAset,
    getKepemilikanAset
 };
 