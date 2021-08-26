import { makeStyles } from "@material-ui/core/styles";

const FormHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1>Registration Form</h1>
      <h2>Sinha Education Point</h2>
    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "uppercase",
    "& h1": {
      fontSize: "3rem",
      color: theme.palette.secondary.main,
      textAlign: "center",
      "@media (max-width: 767px)": {
        fontSize: "2rem",
      },
    },
    "& h2": {
      fontSize: "1.5rem",
      textAlign: "center",
      "@media (max-width: 767px)": {
        fontSize: "1.2rem",
      },
    },
  },
}));

export default FormHeader;
