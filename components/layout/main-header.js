import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const MainHeader = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => router.push("/")}
          >
            <Image
              src="/logo.svg"
              alt="sinha education point"
              width="40"
              height="40"
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SINHA EDUCATION POINT
          </Typography>
          <Link href="/#home">
            <a className={classes.links}>
              <Button>Home</Button>
            </a>
          </Link>
          <Link href="/#about">
            <a className={classes.links}>
              <Button>About</Button>
            </a>
          </Link>
          <Link href="/#courses">
            <a className={classes.links}>
              <Button>Courses</Button>
            </a>
          </Link>
          <Link href="/#faculty">
            <a className={classes.links}>
              <Button>Faculties</Button>
            </a>
          </Link>
          <Link href="/#contact">
            <a className={classes.links}>
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
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  links: {
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
}));

export default MainHeader;
