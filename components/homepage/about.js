import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.root}>
      <h3>
        About Us.
        <hr />
      </h3>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image src="/logo_5.svg" alt="brand logo" height="200" width="200" />
        </div>
        <div className={classes.text}>
          <p>
            We are one of the best coaching institues for all classes in this
            area and are committed to provide better education with some
            exclusive features:
          </p>
          <br />
          <ul>
            <li>Free demo classes.</li>
            <li>Groups or individual classes.</li>
            <li>Scholarship facility for poor students.</li>
            <li>Extra classes for weak students.</li>
            <li>Quality teaching by experienced teachers.</li>
          </ul>
        </div>
      </div>
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
  content: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
  },
  text: {
    maxWidth: "600px",
    margin: "0 30px",
    "& ul": {
      listStyleType: "square",
    },
  },
  image: {
    margin: "20px",
  },
}));

export default AboutPage;
