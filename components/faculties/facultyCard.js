import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const FacultyCard = ({ name, content, imgLoc }) => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
      <CardMedia
        component="img"
        alt={name}
        height="300"
        image={imgLoc}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
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
    width: 350,
    transition: "all 0.5s ease",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.dark,
    "@media (max-width: 767px)": {
      maxWidth: "300px",
    },
    "&:hover": {
      transform: "scale(1.05) rotate(3deg)",
    },
  },
}));

export default FacultyCard;
