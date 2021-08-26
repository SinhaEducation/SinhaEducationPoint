import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const AddressSection = ({ handleChange }) => {
  const classes = useStyles();

  return (
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

export default AddressSection;
