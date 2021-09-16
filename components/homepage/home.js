import { useRouter } from "next/router";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

const HeroPage = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div id="home" className={classes.root}>
      <div className={classes.main}>
        <Image
          src="/logo_5.svg"
          alt="sinha education point"
          width="300"
          height="300"
        />
        <h1 className={classes.title}>
          Let&apos;s start to learn for better future.
        </h1>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<PersonIcon />}
          onClick={() => router.push("/register")}
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
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "max(30px, 3.5vw)",
    fontFamily: "Style Script, cursive",
    fontWeight: "lighter",
    textAlign: "center",
    margin: "20px auto",
  },
  button: {
    margin: "0 auto",
  },
}));

export default HeroPage;
