import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ItemCard from "../Cards/product";

const ItemList = ({ items, title }) => {
  if (!items.length) {
    return <h3>No Items Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {items &&
        items.map((item) => (
          <ItemCard item={item} />
          // <div key={item._id} className="card mb-3">
          //   <p className="card-header">
          //     <Link
          //       to={`/profile/${item.username}`}
          //       style={{ fontWeight: 700 }}
          //       className="text-light"
          //     >
          //       {item.username}
          //     </Link>{" "}
          //     item on {item.createdAt}
          //   </p>
          //   <div className="card-body">
          //     <Link to={`/item/${item._id}`}>
          //       <p>{item.description}</p>
          //       {/* <p className="mb-0">
          //         Comments: {item.commentCount} || Click to{" "}
          //         {item.commentCount ? "see" : "start"} the discussion!
          //       </p> */}
          //     </Link>
          //   </div>
          // </div>
        ))}
    </div>
  );
};

// ReactDOM.render(<ItemCard />);

export default ItemList;
