import { Link, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

interface propstypes {
  id: number;
}

interface storyType {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const Story = ({ id }: propstypes) => {
  const classes = useStyles();
  let api = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

  const [story, setStory] = useState<storyType>();

  useEffect(() => {
    let fetchdata = async () => {
      let data: storyType = await fetch(api).then((d) => d.json());
      setStory(data);
    };
    fetchdata();
  }, [api]);

  return (
    <Paper className={classes.paper}>
      <Link href={story?.url} target="_blank">
        <Typography>{story?.title}</Typography>
      </Link>
      <Typography variant="caption">By : {story?.by} | </Typography>
      <Typography variant="caption">Type : {story?.type}</Typography>
    </Paper>
  );
};

export default Story;
