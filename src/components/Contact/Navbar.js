import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Nav } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("user_session");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
        </IconButton> */}
        <Typography variant="h4" className={classes.title}>
          Contact Application
        </Typography>
        <IconButton color="inherit" href="/about" onClick={handleOpen}>
          About
        </IconButton>
        <IconButton color="inherit" href="/contacts" onClick={handleOpen}>
          Contacts List
        </IconButton>
        <IconButton color="inherit" href="/contact" onClick={handleOpen}>
          Contactus
        </IconButton>
        <IconButton color="inherit" href="/" onClick={handleClose}>
          Logout
        </IconButton>
        {/* <Button color="inherit" onClick={handleOpen}>
          Help
        </Button> */}
      </Toolbar>    
    </AppBar>
  );
};

export default Navbar;