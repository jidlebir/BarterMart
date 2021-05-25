
import React from "react";
import ReactDOM from "react-dom";
import ItemCard from "../components/Cards/product";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ITEMS } from "../utils/queries";
import { makeStyles } from "@material-ui/core/styles";

// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Auth from "../utils/auth";
import ItemList from '../components/ItemList';

<<<<<<< HEAD

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS} from '../utils/queries';
import { LOGIN_USER } from '../utils/mutations';


const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
<<<<<<< HEAD
  const { data: userData } = useQuery(LOGIN_USER);
  const thoughts = data?.thoughts || [];
=======
=======
const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log(data)
>>>>>>> 07ba43572b83b4821d2d68249cc490261de2c572
  // const { data: userData } = useQuery(QUERY_ACCOUNT_BASIC);
  const items = data?.items || [];
>>>>>>> 17c9f8cea30f79c6179d0d3fb8abf92f44b083e0

  // const loggedIn = Auth.loggedIn();

  return (
    <main>
<<<<<<< HEAD
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <Profile/>
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QUERY_ITEMS ={thoughts} title="Any good Barters?(s)..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <singleitems
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
=======

      <h1>Dashboard</h1>
      <ItemList items={items} />

>>>>>>> 17c9f8cea30f79c6179d0d3fb8abf92f44b083e0
    </main>
  );
};

export default Home;
