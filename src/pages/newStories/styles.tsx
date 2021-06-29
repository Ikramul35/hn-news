import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
