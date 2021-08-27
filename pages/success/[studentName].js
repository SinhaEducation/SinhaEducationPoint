import { useRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const Page = () => {
  const classes = useStyles();
  const router = useRouter();
  const { studentName } = router.query;

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <h1>Thank you {studentName}, for registering.</h1>
        <br />
        <p>
          To contact us{" "}
          <Link href="/#contact">
            <a className={classes.link}>click here</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    maxWidth: "400px",
    textAlign: "center",
    margin: "20px",
  },
  link: {
    color: theme.palette.primary.contrastText,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default Page;
