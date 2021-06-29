import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navlink: {
      color: "#fff",
      textDecoration: "none",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hacker News
          </Typography>
          <Link to="/">
            <Button className={classes.navlink}>Top</Button>
          </Link>
          <Link to="/newstories">
            <Button className={classes.navlink}>New</Button>
          </Link>
          <Link to="/beststories">
            <Button className={classes.navlink}>Best</Button>
          </Link>
          <Link to="/about">
            <Button className={classes.navlink}>About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
