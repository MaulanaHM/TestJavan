import { buatDataAset, ubahDataAset, hapusDataAset } from '../models/data_aset_model.js'

/**
 * @param {object} req
 * @param {object} res
 * @returns {object} role array
 */
 
 const tambahAset = async (req, res) => {
    const dataUtama = req.body;

    try {
        const dataAset = await buatDataAset(dataUtama);
        if (dataAset) {
            return res.status(201).send({
                status: 201,
                message: "Berhasil menambah data aset",
                data: dataAset
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

 const editAset = async (req, res) => {
    const dataUtama = req.body;

    try {
        const newDataAset = await ubahDataAset(dataUtama);
        if (newDataAset) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil mengubah data aset",
                data: newDataAset
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

 const deleteAset = async (req, res) => {
    const idDataAset = req.params.id;

    try {
        const newDataAset = await hapusDataAset(idDataAset);
        if (newDataAset) {
            return res.status(200).send({
                status: 200,
                message: "Berhasil menghapus data aset",
                data: newDataAset
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
    tambahAset,
    editAset,
   deleteAset
 };
 