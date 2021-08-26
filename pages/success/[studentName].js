import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const Page = () => {
  const classes = useStyles();
  const router = useRouter();
  const { studentName } = router.query;

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <h2>Thank you {studentName}, for registering.</h2>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  main: {
    margin: "auto",
  },
}));

export default Page;
