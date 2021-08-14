import { makeStyles } from "@material-ui/core/styles";

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.root}>
      <h1>About Us</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: "100px 0 0 0",
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default AboutPage;
