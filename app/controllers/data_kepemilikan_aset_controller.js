import { buatKepemilikanAset, ubahDataKepemilikanAset } from '../models/data_kepemilikan_model.js'

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

//  const deleteAset = async (req, res) => {
//     const idDataAset = req.params.id;

//     try {
//         const newDataAset = await hapusDataAset(idDataAset);
//         if (newDataAset) {
//             return res.status(200).send({
//                 status: 200,
//                 message: "Berhasil menghapus data aset",
//                 data: newDataAset
//             })
//         } else {
//             return res.status(500).send({
//                 status: 500,
//                 error: 'Internal server error',
//             });
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send({
//             status: 500,
//             error: 'Internal server error',
//         });
//     }
//  }
 
 export {
    tambahKepemilikanAset,
    editKepemilikanAset,
//    deleteAset
 };
 