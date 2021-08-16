import { makeStyles } from "@material-ui/core/styles";

const Page = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default Page;
