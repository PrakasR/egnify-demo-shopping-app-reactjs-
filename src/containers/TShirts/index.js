import React, { useState } from "react";
import TShirts from "./items";
import Filter from "./filter";
import CartItems from "./cart";
import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

const ShoppingItems = () => {
  const [filterStrings, setFilterStrings] = useState({
    XS: false,
    S: false,
    M: false,
    ML: false,
    L: false,
    XL: false,
    XXL: false
  });
  const [cartElements, setCartElements] = useState([]);

  const addCartItem = product => {
    setCartElements([...cartElements, product]);
  };
  const deleteCartItem = productId => {
    const existingCartElements = cartElements.filter(element => {
      return element.id !== productId;
    });
    setCartElements(existingCartElements);
  };

  return (
    <Grid>
      <GridCell span="2">
        <Filter
          filterStrings={filterStrings}
          setFilterStrings={setFilterStrings}
        />
      </GridCell>
      <GridCell span="7">
        <TShirts filterStrings={filterStrings} addCartItem={addCartItem} />
      </GridCell>
      <GridCell span="3">
        <CartItems
          cartElements={cartElements}
          deleteCartItem={deleteCartItem}
        />
      </GridCell>
    </Grid>
  );
};

export default ShoppingItems;