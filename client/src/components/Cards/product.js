import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Link } from "react-router-dom";
import { GridList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     maxWidth: 345,
  //     [theme.breakpoints.down("md")]: {
  //       maxWidth: 200,
  //     },
  //   },
  //   media: {
  //     height: 140,
  //   },
  // }));
  root: {
    background: "linear-gradient(45deg, #49ABCA 30%, #214381 90%)",
    maxWidth: 250,
    maxHeight: 400,

    padding: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: 3,
    margin: 15,
    font: 16,
    color: "White",
    flexGrow: 1,
  },
  title: {
    font: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[900],
  },
  // [theme.breakpoints.down("md")]: {
  //     maxWidth: 150,
  //   }
  //   },
}));

export default function ItemCard({ item }) {
  const classes = useStyles();
  // const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="item" className={classes.avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.createdAt}
      />

      <CardMedia
        component={Link}
        to={`/item/${item.id}`}
        className={classes.media}
        image={item.image}
        title={item.title}
      />

      {/* <CardMedia
        className={classes.media}
        image={item.image}
        title={item.title}
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{item.description}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="localoffer">
          <LocalOfferIcon />
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
