import { buatDataKeluarga, ubahDataKeluarga, hapusDataKeluarga } from '../models/data_keluarga_model.js'

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} role array
 */
 
 const tambahKeluarga = async (req, res) => {
    const dataUtama = req.body;
    const level = req.body.level;
    const idParent = req.body.id_parent ? req.body.id_parent : 0;

    try {
        const dataKeluarga = await buatDataKeluarga(dataUtama, idParent);
        if (dataKeluarga) {
            return res.status(201).send({
                status: 201,
                message: "Berhasil menambah data keluarga",
                data: dataKeluarga
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

 const editKeluarga = async (req, res) => {
    const dataUtama = req.body;

    try {
        const newDataKeluarga = await ubahDataKeluarga(dataUtama);
        if (newDataKeluarga) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil mengubah data keluarga",
                data: newDataKeluarga
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

 const deleteKeluarga = async (req, res) => {
    const idDataKeluarga = req.params.id;

    try {
        const newDataKeluarga = await hapusDataKeluarga(idDataKeluarga);
        if (newDataKeluarga) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil menghapus data keluarga",
                data: newDataKeluarga
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
 
 export {
   tambahKeluarga,
   editKeluarga,
   deleteKeluarga
 };
 