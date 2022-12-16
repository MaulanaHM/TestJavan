// IMPORT PACKAGE
import connection from '../connection.js';

const table = 'family.data_kepemilikan_aset';

const buatKepemilikanAset = async (data) => {
    const queryText = `INSERT INTO ${table}
  (
    id_data_keluarga,
    id_data_aset,
    jumlah
  ) VALUES ($1, $2, $3) RETURNING *`;
    const values = [
        data.id_data_keluarga,
        data.id_data_aset,
        data.jumlah
    ]
    try {
        const { rows } = await connection.query(queryText, values);
        const dbResponse = rows;

        if (dbResponse.length < 1) {
            return false
        } else {
            return dbResponse
        }
    } catch (error) {
        console.log(error)
        return false
    }
};

// const ubahDataAset = async (data) => {
//     const queryText = `UPDATE ${table}
//     SET
//         nama_aset = $1
//     WHERE id_data_aset = $2 RETURNING *`;
//     const values = [
//         data.nama_aset,
//         data.id_data_aset
//     ]
//     try {
//         const { rows } = await connection.query(queryText, values);
//         const dbResponse = rows;

//         if (dbResponse.length < 1) {
//             return false
//         } else {
//             return dbResponse
//         }
//     } catch (error) {
//         console.log(error)
//         return false
//     }
// };

// const hapusDataAset = async (id) => {
//     const queryText = `DELETE FROM ${table} WHERE id_data_aset = ${id}`;
//     try {
//         await connection.query(queryText);
//         return true
//     } catch (error) {
//         console.log(error)
//         return false
//     }
// };

export {
    buatKepemilikanAset,
    // ubahDataAset,
    // hapusDataAset
};
