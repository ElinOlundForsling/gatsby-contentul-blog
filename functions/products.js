const query = require("./utils/query");

 const PRODUCTS = `
     query {
         allProducts {
           data {
              _id
              species
              origin
              price
           }
         }
      }
 `;

 const PRODUCT = `
 query($id: Int) {
  getProductById(id: $id) {
    _id
    species
    origin
    price
  }
}
 `;

  exports.handler = async (event) => {
    let id = event.path.match(/\/$/g) ? event.path.slice(0, -1) : event.path;
    id = id.match(/\d+$/g)[0]
    id = Number(id)
    if (id) {
      const { data, errors } = await query(PRODUCT, { id });
      console.log(data)
      if (errors) {
        return {
          statusCode: 500,
          body: JSON.stringify(errors)
        };
     }

     return {
       statusCode: 200,
       body: JSON.stringify({ product: data.getProductById })
     };

    } else {
      const { data, errors } = await query(PRODUCTS);
 
      if (errors) {
         return {
           statusCode: 500,
           body: JSON.stringify(errors)
         };
      }
 
      return {
        statusCode: 200,
        body: JSON.stringify({ products: data.allProducts.data })
      };
    }
   };