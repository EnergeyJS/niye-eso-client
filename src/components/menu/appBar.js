import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import MTStyle from '../../modules/index';

import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import RenderMobileMenu from './mobileMenu';
import DrawerMenuContext from '../context/DrawerMenuContext';
import MainMenu from './mainMenu';
import DrawerMenu from './drawerMenu';

export default function appBar () {
  const classes = MTStyle ();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = React.useState (false);
  /**From Nav */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = React.useState (null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState (null);


  function handleProfileMenuOpen (event) {
    setAnchorEl (event.currentTarget);
  }

  function handleMobileMenuOpen (event) {
    setMobileMoreAnchorEl (event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  function handleDrawerOpen () {
    setOpen (true);
  }

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx (classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx (classes.menuButtonAppBar, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'Search'}}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerMenuContext.Provider
        value={[mobileMoreAnchorEl, setMobileMoreAnchorEl]}
      >
        <RenderMobileMenu />
      </DrawerMenuContext.Provider>
      <DrawerMenuContext.Provider value={[anchorEl, setAnchorEl]}>
        <MainMenu />
      </DrawerMenuContext.Provider>
      <DrawerMenuContext.Provider value={[open, setOpen]}>
        <DrawerMenu />
      </DrawerMenuContext.Provider>
    </div>
  );
}
