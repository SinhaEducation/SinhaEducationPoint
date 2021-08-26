import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const StudentSection = ({ handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h3>Student Details</h3>
      <TextField
        required
        name="studentName"
        onChange={handleChange}
        className={classes.textfield}
        label="Student Name"
        color="secondary"
        type="text"
      />
      <TextField
        required
        name="dateOfBirth"
        onChange={handleChange}
        className={classes.textfield}
        label="Date of Birth"
        color="secondary"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        name="gender"
        onChange={handleChange}
        className={classes.textfield}
        label="Gender"
        color="secondary"
        type="text"
      />
      <TextField
        required
        name="classAppliedFor"
        onChange={handleChange}
        className={classes.textfield}
        label="Class Applied For"
        color="secondary"
        type="number"
        InputProps={{ inputProps: { min: 1, max: 12 } }}
      />
      <TextField
        required
        name="email"
        onChange={handleChange}
        className={classes.textfield}
        label="Email Address"
        color="secondary"
        type="email"
      />
      <TextField
        required
        name="contactNo"
        onChange={handleChange}
        className={classes.textfield}
        label="Contact No"
        color="secondary"
        type="tel"
        inputProps={{ pattern: "[0-9]{10}" }}
      />
      <TextField
        required
        name="schoolName"
        onChange={handleChange}
        className={classes.textfield}
        label="School Name"
        color="secondary"
        type="text"
      />
      <TextField
        required
        name="percentPrevClass"
        onChange={handleChange}
        className={classes.textfield}
        label="Percentage Obtained in Previous Class"
        color="secondary"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 100 } }}
      />
      <TextField
        required
        name="subject"
        onChange={handleChange}
        className={classes.textfield}
        label="Subject Applied For"
        color="secondary"
        type="text"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textfield: {
    flex: 1,
    margin: "10px",
  },
}));

export default StudentSection;
