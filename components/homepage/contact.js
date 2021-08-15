import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <h3>
        Contact.
        <hr />
      </h3>
      <p>Feel free to contact us on social media.</p>
      <div className={classes.social}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton href="mailto:hardik0casr@gmail.com">
          <MailIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 0 80px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    "& p": {
      padding: "10px",
      textAlign: "center",
      fontSize: "1.2rem",
      margin: "20px 0",
    },
  },
  social: {
    padding: "10px",
    display: "flex",
    position: "center",
    alignItems: "space-around",
    justifyContent: "center",
  },
}));

export default ContactPage;
