import React from "react";
import "./hojas-de-estilo/style.css";


//Components
import NavBar from "./components/NavBar/NavBar";
import ItemCounter from "./components/Items/ItemCounter";
import ItemListContainer from "./components/Items/ItemListContainer";


const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div className = "container">
            <ItemListContainer/>
          </div>

          <div>
            <ItemCounter
              stock={10}
              initial={1}
              onAdd={(cantidadDeProductos) =>
                console.log(`cantidadDeProductos: ${cantidadDeProductos}`)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
