import axios from "axios";
import qs from "qs";
import fetch from 'node-fetch';

const hargaAset = async (keyword) => {
  let serverAPI = `https://dummyjson.com/products/search?q=${keyword}`;
  const stringAPI = JSON.stringify(serverAPI)
//   console.log(stringAPI, '<')
  try {
    const option = {
    method: 'GET',
    headers: { "Content-Type": "application/json" }, 
      // "httpsAgent": new https.Agent({
      //   rejectUnauthorized: false
      // })
    }
    const rawResponse = await fetch(serverAPI, option);
    const response = await rawResponse.json();
    console.log(response.products[0].price);
    return response.products[0].price;

  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};


export { hargaAset };
