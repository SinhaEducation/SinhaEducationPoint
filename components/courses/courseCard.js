import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const CourseCard = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  rootCard: {
    width: 300,
    transition: "all 0.5s ease",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    "@media (max-width: 767px)": {
      maxWidth: "250px",
    },
    "&:hover": {
      transform: "scale(1.05) rotate(-5deg)",
    },
  },
}));

export default CourseCard;
