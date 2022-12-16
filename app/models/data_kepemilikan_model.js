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

const ubahDataKepemilikanAset = async (data) => {
    const queryText = `UPDATE ${table}
    SET
    id_data_keluarga = $1,
    id_data_aset = $2,
    jumlah = $3
    WHERE id_data_kepemilikan_aset = $4 RETURNING *`;
    const values = [
        data.id_data_keluarga,
        data.id_data_aset,
        data.jumlah,
        data.id_data_kepemilikan_aset
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

const hapusDataKepemilikanAset = async (id) => {
    const queryText = `DELETE FROM ${table} WHERE id_data_kepemilikan_aset = ${id}`;
    try {
        await connection.query(queryText);
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};

const getAllDataKepemilikanAset = async (data) => {
    const queryText = `select 
    dk.id_data_keluarga,
    dk.nama_keluarga,
    da.nama_aset
    from "family".data_keluarga dk
    left join "family".data_kepemilikan_aset dka on dk.id_data_keluarga = dka.id_data_keluarga 
    left join "family".data_aset da on da.id_data_aset = dka.id_data_aset 
    order by dk.id_data_keluarga asc`;

    try {
        const { rows } = await connection.query(queryText);
        const dbResponse = rows;

        if (dbResponse.length < 1) {
            return 404
        } else {
            return dbResponse
        }
    } catch (error) {
        console.log(error)
        return false
    }
};

export {
    buatKepemilikanAset,
    ubahDataKepemilikanAset,
    hapusDataKepemilikanAset,
    getAllDataKepemilikanAset
};
