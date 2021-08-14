import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

const HeroPage = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root}>
      <div className={classes.main}>
        <Image src="/logo_5.svg" alt="brand logo" width="300" height="300" />
        <h2 className={classes.title}>
          Let&apos;s start to learn for better future.
        </h2>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<PersonIcon />}
        >
          REGISTER NOW!
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
  },
  main: {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "max(30px, 3.5vw)",
    fontFamily: "Style Script, cursive",
    fontWeight: "lighter",
    margin: "0 auto",
  },
  button: {
    margin: "0 auto",
  },
}));

export default HeroPage;
