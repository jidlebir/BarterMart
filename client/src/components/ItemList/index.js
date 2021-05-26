import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ItemCard from "../Cards/product";
import { Grid } from "@material-ui/core";

const ItemList = ({ items, title }) => {
  if (!items.length) {
    return <h3>No Items Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <Grid container>
        {items &&
          items.map((item) => (
            <Grid item xs={3}>
              <ItemCard className="item-cards " item={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

// ReactDOM.render(<ItemCard />);

export default ItemList;
