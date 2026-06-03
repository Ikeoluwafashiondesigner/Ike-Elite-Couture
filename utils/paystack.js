const axios = require("axios");

async function verifyPaystackPayment(reference){

  try{

    const response = await axios.get(

      `https://api.paystack.co/transaction/verify/${reference}`,

      {
        headers:{
          Authorization:
          `Bearer ${process.env.PAYSTACK_SECRET}`
        }
      }

    );

    return response.data;

  }catch(err){

    throw err;

  }

}

module.exports = {
  verifyPaystackPayment
};