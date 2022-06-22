import React, { useState, useEffect } from "react";
// import { Box, Grid } from "@mui/material";
// import Item from "./Item";
import "../../hojas-de-estilo/ItemList.css";
import ItemList from "./ItemList";




const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  console.log("DATA:", items);

  useEffect(() => {
    // Llamar a la api
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setItems(json)); // setUsers: le paso a users toda la data de la API
  }, []);
  return <ItemList data = {items} />

};

export default ItemListContainer;