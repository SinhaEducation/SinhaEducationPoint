import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const DateSection = ({ handleChange }) => {
  const classes = useStyles();

  return (
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

export default DateSection;
