import pool from "./db_conn.js";

export default {
  /**
   * DB Query
   * @params { object } req
   * @params { object } res
   * @returns { object } object
   */

  query(queryText, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(queryText, params)
        .then(res => {
          resolve(res);
          // console.log(queryText)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
