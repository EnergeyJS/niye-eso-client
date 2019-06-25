import React, { useState } from 'react';

import { fade,makeStyles, useTheme } from '@material-ui/core/styles';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(6)
  },
  grow: {
    flexGrow: 1,
  },
  menuButtonAppBar: {
    marginRight: theme.spacing (2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up ('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade (theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing (2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up ('sm')]: {
      marginLeft: theme.spacing (3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing (7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing (1, 1, 1, 7),
    transition: theme.transitions.create ('width'),
    width: '100%',
    [theme.breakpoints.up ('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up ('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up ('md')]: {
      display: 'none',
    },
  },
  list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }
}));

export default function MobileMenu(){

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    /**From Nav */
    const [anchorEl, setAnchorEl] = React.useState (null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState (null);
    const [drawerIsOpen, setDrawerIsOpen] = useState (false);
  
    const isMenuOpen = Boolean (anchorEl);
    const isMobileMenuOpen = Boolean (mobileMoreAnchorEl);
  
    function handleProfileMenuOpen (event) {
      setAnchorEl (event.currentTarget);
    }
  
    function handleMobileMenuClose () {
      setMobileMoreAnchorEl (null);
    }
  
    function handleMenuClose () {
      setAnchorEl (null);
      handleMobileMenuClose ();
    }
  
    function handleMobileMenuOpen (event) {
      setMobileMoreAnchorEl (event.currentTarget);
    }
  
    function drawerMenuOpen () {
      setDrawerIsOpen (!drawerIsOpen);
    }
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="Show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
}