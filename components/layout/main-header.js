import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const MainHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <Image src="/logo.svg" alt="company logo" width="40" height="40" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SINHA EDUCATION POINT
          </Typography>
          <Link href="/#home">
            <a>
              <Button>Home</Button>
            </a>
          </Link>
          <Link href="/#about">
            <a>
              <Button>About</Button>
            </a>
          </Link>
          <Link href="/#contact">
            <a>
              <Button>Contact</Button>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Open Sans Condensed, sans-serif",
  },
}));

export default MainHeader;
