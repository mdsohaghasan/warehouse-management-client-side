// import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Inventory from "./Inventory";


// const InventoryHook = () => {
//     const [Inventores, setInventores] = useState([]);
//     useEffect(() => {
//         fetch("items.json")
//             .then((res) => res.json())
//             .then((data) => setInventores(data));
//     }, []);
//     return (
//         <div>
//             <h1 className="services-title">Our item</h1>
//             <div className="InventoryHook-container container">
//                 {Inventores.map((inventory) => (
//                     <Inventory key={inventory.id} inventory={inventory}></Inventory>

//                 ))}
//             </div>
//             <Link to="/Inventory" class="btn btn-primary">get Inventory</Link>
//         </div>
//     );
// };

// export default InventoryHook;



