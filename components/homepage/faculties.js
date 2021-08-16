import { makeStyles } from "@material-ui/core/styles";

const FacultyPage = () => {
  const classes = useStyles();

  return (
    <div id="faculty" className={classes.root}>
      <h3>
        Faculties.
        <hr />
      </h3>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    padding: "20px 0 50px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& h3": {
      fontSize: "60px",
    },
    "& h3 hr": {
      margin: "2px",
      height: "3px",
      width: "150px",
      borderRadius: "5px",
      border: "hidden",
      marginInlineStart: "auto",
      marginInlineEnd: "auto",
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
}));

export default FacultyPage;
