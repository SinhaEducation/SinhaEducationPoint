import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import StudentSection from "./formSections/studentSection";
import ParentSection from "./formSections/parentSection";
import AddressSection from "./formSections/addressSection";
import DateSection from "./formSections/dateSection";

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
      action={`/success/${formValues.studentName}`}
      data-netlify="true"
    >
      <input type="hidden" name="registration-form" value="contact" />
      <StudentSection handleChange={handleChange} />
      <ParentSection handleChange={handleChange} />
      <AddressSection handleChange={handleChange} />
      <DateSection handleChange={handleChange} />
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
}));

export default MainForm;
