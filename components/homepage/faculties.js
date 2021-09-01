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
    {
      id: 2,
      name: "Mrs. Deepika Karan",
      content: "Co-Founder",
      imgLoc: "/images/mrssinha.jpg",
    },
    {
      id: 3,
      name: "Mr. Rajat Kumar Singh",
      content: "B. tech. from NIT Delhi",
      subjects: "Physics and Chemistry for class 11th and 12th.",
      imgLoc: "/images/rajat.jpg",
    },
    {
      id: 4,
      name: "Mr. Rishabh Shukla",
      content: "Masters in Political Science and Masters in History",
      subjects:
        "Social Science for class 9th and 10th, and Humanities for class 11th and 12th.",
      imgLoc: "/images/rishab.jpg",
    },
    {
      id: 5,
      name: "Miss Neha",
      content: "M. Com. from  Delhi University",
      subjects: "Accounts and Economics for Commerce Students.",
      imgLoc: "/images/neha.jpg",
    },
    {
      id: 6,
      name: "Miss Ishita",
      content: "B. Com. from  Delhi University",
      subjects: "All Subjects for Junior Batches.",
      imgLoc: "/images/ishita.jpg",
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
        spacing={4}
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
