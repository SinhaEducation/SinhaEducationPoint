import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import FormHeader from "../components/register/header";
import MainForm from "../components/register/form";

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Register | Sinha Education Point</title>
        <meta
          name="description"
          content="Register for any class at Sinha Education Point | Best coaching institute for all students."
        />
      </Head>
      <FormHeader />
      <MainForm />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

export default Page;
