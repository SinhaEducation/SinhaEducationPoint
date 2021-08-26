import CourseCard from "../courses/courseCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const CoursesPage = () => {
  const classes = useStyles();

  const courses = [
    {
      id: 1,
      title: "Class 1st to 7th",
      content: "All Subjects",
    },
    {
      id: 2,
      title: "Class 8th to 10th",
      content: "Maths, Science and Social Studies(SST)",
    },
    {
      id: 3,
      title: "Class 11th and 12th",
      content:
        "Maths, Accounts, Economics, B. St., History, Geography and Political Science",
    },
    {
      id: 4,
      title: "B. com and BCA",
      content: "Maths and Accounts",
    },
  ];

  return (
    <div id="courses" className={classes.root}>
      <h3>
        Courses.
        <hr />
      </h3>
      <Grid className={classes.grid} container justify="center" spacing={3}>
        {courses.map((data, i) => (
          <Grid item key={data.id}>
            <CourseCard {...data} />
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
    backgroundColor: theme.palette.primary.dark,
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

export default CoursesPage;
