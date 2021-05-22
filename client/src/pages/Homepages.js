import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ITEMS } from "../utils/queries";
import ItemList from "../components/ItemList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.Item || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <itemList items={items} />}</div>
    </main>
  );
};

export default Home;
