import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MainForm = () => {
  const classes = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formValues, setFormValues] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    classAppliedFor: "",
    email: "",
    contactNo: "",
    schoolName: "",
    percentPrevClass: "",
    subject: "",
    fatherName: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherOccupation: "",
    motherContact: "",
    gaurdianName: "",
    gaurdianOccupation: "",
    gaurdianContact: "",
    correspondenceAddress: "",
    permanentAddress: "",
    dateOfRegistration: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form
      className={classes.form}
      autoComplete="off"
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
    >
      <input type="hidden" name="registration-form" value="contact" />
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
      <div className={classes.section}>
        <h3>Gaurdian Details</h3>
        <TextField
          name="fatherName"
          onChange={handleChange}
          className={classes.textfield}
          label="Father's Name"
          color="secondary"
          type="text"
        />
        <TextField
          name="fatherOccupation"
          onChange={handleChange}
          className={classes.textfield}
          label="Father's Occupation"
          color="secondary"
          type="text"
        />
        <TextField
          name="fatherContact"
          onChange={handleChange}
          className={classes.textfield}
          label="Father's Contact No"
          color="secondary"
          type="tel"
          inputProps={{ pattern: "[0-9]{10}" }}
        />
        <TextField
          name="motherName"
          onChange={handleChange}
          className={classes.textfield}
          label="Mother's Name"
          color="secondary"
          type="text"
        />
        <TextField
          name="motherOccupation"
          onChange={handleChange}
          className={classes.textfield}
          label="Mother's Occupation"
          color="secondary"
          type="text"
        />
        <TextField
          name="motherContact"
          onChange={handleChange}
          className={classes.textfield}
          label="Mother's Contact No"
          color="secondary"
          type="tel"
          inputProps={{ pattern: "[0-9]{10}" }}
        />
        <TextField
          required
          name="gaurdianName"
          onChange={handleChange}
          className={classes.textfield}
          label="Gaurdian's Name"
          color="secondary"
          type="text"
        />
        <TextField
          required
          name="gaurdianOccupation"
          onChange={handleChange}
          className={classes.textfield}
          label="Gaurdian's Occupation"
          color="secondary"
          type="text"
        />
        <TextField
          required
          name="gaurdianContact"
          onChange={handleChange}
          className={classes.textfield}
          label="Gaurdian's Contact No"
          color="secondary"
          type="tel"
          inputProps={{ pattern: "[0-9]{10}" }}
        />
      </div>
      <div className={classes.section}>
        <h3>Address Details</h3>
        <TextField
          required
          name="correspondenceAddress"
          onChange={handleChange}
          className={classes.textfield}
          label="Correspondence Address"
          color="secondary"
          type="text"
        />
        <TextField
          required
          name="permanentAddress"
          onChange={handleChange}
          className={classes.textfield}
          label="Permanent Address"
          color="secondary"
          type="text"
        />
      </div>
      <div className={classes.section}>
        <h3>Other info</h3>
        <TextField
          required
          name="dateOfRegistration"
          onChange={handleChange}
          className={classes.textfield}
          label="Date of Registration"
          color="secondary"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.submit}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={isProcessing}
        >
          {isProcessing ? "PROCESSING..." : "Register"}
        </Button>
      </div>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "auto",
    padding: "20px 0 40px 0",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: "10px",
  },
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

export default MainForm;
