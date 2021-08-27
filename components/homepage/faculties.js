import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FacultyCard from "../faculties/facultyCard";

const FacultyPage = () => {
  const classes = useStyles();

  const faculties = [
    {
      id: 1,
      name: "Mr. Sanjeev Sinha",
      content: "Founder and Director",
      imgLoc: "/images/author.jpg",
    },
  ];

  return (
    <div id="faculty" className={classes.root}>
      <h3>
        Faculties.
        <hr />
      </h3>
      <Grid
        className={classes.grid}
        container
        justifyContent="center"
        spacing={3}
      >
        {faculties.map((data, i) => (
          <Grid item key={data.id}>
            <FacultyCard {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
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
  grid: {
    width: "100%",
    padding: "50px 20px",
  },
}));

export default FacultyPage;
