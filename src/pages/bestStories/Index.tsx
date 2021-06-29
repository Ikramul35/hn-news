import { CircularProgress, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Story from "../../components/story/Index";
import useStyles from "./styles";

const BestStories = () => {
  const classes = useStyles();
  let api = "https://hacker-news.firebaseio.com/v0/newstories.json";

  const [stories, setStories] = useState<number[]>();

  useEffect(() => {
    let fetchdata = async () => {
      let data: number[] = await fetch(api).then((d) => d.json());
      data = data.slice(0, 50);
      setStories(data);
    };
    fetchdata();
  }, [api]);

  return (
    <div>
      {stories ? (
        stories?.map((st, idx) => (
          <div key={st}>
            <Story id={st} />
            <Divider />
          </div>
        ))
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default BestStories;
