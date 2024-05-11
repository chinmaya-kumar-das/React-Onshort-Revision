// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

// const App = () => {
//   const [data, setData] = useState();

//   async function fectchHandler() {
//     try {
//       const datas = await fetch("https://dummyjson.com/products");
//       let fullData = await datas.json();
//       setData(fullData);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   fectchHandler();
//   return (
//     <div className="d-flex justify-content-center align-items-center">
//       {/* submiting data with fetch */}
     
//       <div className="d-flex gap-2 flex-row flex-wrap px-2">
//         {data &&
//           data.products.map((product) => (
//             <div key={product.id} style={{ width: '250px', height: '300px' }} className="d-flex flex-column gap-2 px-2 py-2 justify-content-center align-items-center  border">
//               <img style={{ width: '200px', height: '250px' }}  src={product.images[0]}></img>
//               <div>Name:{product.title}</div>
//               <div>MRP : {product.price}</div>
//               <div>Rating : {product.rating}</div>
             
            
              
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex gap-2 flex-row flex-wrap px-2">
        {data.products &&
          data.products.map((product) => (
            <div
              key={product.id}
              style={{ width: "250px", height: "300px" }}
              className="d-flex flex-column gap-2 px-2 py-2 justify-content-center align-items-center border"
            >
              <img
                style={{ width: "180px", height: "200px" }}
                src={product.images[0]}
                alt={product.title}
              />
              <div>Name: {product.title}</div>
              <div>MRP: {product.price}</div>
              <div>Rating: {product.rating}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
