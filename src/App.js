//   return (
//     <>
//       <main className="menu">
//         <h2>our menu</h2>
//         <div>
//           {pizzaData.map((item) => (
//             <Pizza pizzaObj={item} key={item.name} />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }

// function Pizza({ pizzaObj }) {
//   console.log(pizzaObj);

//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         {/* <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span> */}
//       </div>
//     </li>
//   );
// }
