import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#b388ff",
      "&:hover": {
        fill: "#009688",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedInIcon />} href="https://www.linkedin.com/in/mateo-dellacqua-castro/" className={classes.root} />
      <BottomNavigationAction icon={<GitHubIcon />} href="https://github.com/teodc888" className={classes.root} />
      <BottomNavigationAction icon={<Instagram />} href="https://www.instagram.com/teodellacqua/" className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
