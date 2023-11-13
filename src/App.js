import "./App.css";
import React from "react";

function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "prosciutto.jpg",
      soldOut: false,
    },
  ];

  const pizzaObj = pizzaData.map((item) => item);

  console.log(pizzaObj);

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        <li>
          <img src={pizzaObj.photoName} alt={pizzaObj.name} />
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
          </div>
        </li>
      </main>
    </>
  );
}

export default App;

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
