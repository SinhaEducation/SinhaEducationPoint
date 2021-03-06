import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";

const Footer = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <span>&#169; Sinha Education Point 2021</span>
      <Tooltip
        title="Website created by Hardik Sachan"
        placement="top-end"
        arrow
      >
        <IconButton
          href="https://hardiksachan.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    "& span": {
      flexGrow: 1,
      textAlign: "center",
    },
  },
}));

export default Footer;
