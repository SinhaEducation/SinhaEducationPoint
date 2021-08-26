import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const ParentSection = ({ handleChange }) => {
  const classes = useStyles();

  return (
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

export default ParentSection;
