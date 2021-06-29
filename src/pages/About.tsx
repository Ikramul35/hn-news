import { Typography } from "@material-ui/core";
import React from "react";

const About = () => {
  return (
    <>
      <Typography variant="h2">About</Typography>
      <Typography variant="subtitle1">
        This is a frontend for displaying data from Hacker News API.
      </Typography>
      <Typography variant="subtitle1">
        This website is made using React, MaterialUI, React Router.
      </Typography>
    </>
  );
};

export default About;
