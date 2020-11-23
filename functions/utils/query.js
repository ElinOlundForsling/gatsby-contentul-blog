const axios = require("axios");
 require("dotenv").config();

 module.exports = async (query, variables) => {
   const result = await axios({
       url: "https://graphql.fauna.com/graphql",
       method: "POST",
       headers: {
           Authorization: `Bearer fnAD62PbTqACBX52_1a2kNCkYp3wMxOviCeZsJQ3`
       },
       data: {
         query,
         variables
       }
  });
  return result.data;
 };