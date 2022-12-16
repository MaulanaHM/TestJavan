// IMPORT PACKAGE
import connection from '../connection.js';

const table = 'family.data_aset';

const buatDataAset = async (data) => {
    const queryText = `INSERT INTO ${table}
  (
    nama_aset
  ) VALUES ($1) RETURNING *`;
    const values = [
        data.nama_aset
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

// const ubahDataKeluarga = async (data) => {
//     const queryText = `UPDATE ${table}
//     SET
//         nama_keluarga = $1,
//         jenis_kelamin = $2,
//         level = $3,
//         id_parent = $4
//     WHERE id_data_keluarga = $5 RETURNING *`;
//     const values = [
//         data.nama_keluarga,
//         data.jenis_kelamin,
//         data.level,
//         data.id_parent,
//         data.id_data_keluarga
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

// const hapusDataKeluarga = async (id) => {
//     const queryText = `DELETE FROM ${table} WHERE id_data_keluarga = ${id}`;
//     try {
//         await connection.query(queryText);
//         return true
//     } catch (error) {
//         console.log(error)
//         return false
//     }
// };

export {
    buatDataAset,
    // ubahDataKeluarga,
    // hapusDataKeluarga
};
