import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line import/no-extraneous-dependencies
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

import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChildCare from '@material-ui/icons/ChildCare';
import Trash from '@material-ui/icons/RestoreFromTrash';
import Drafts from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
import MTStyle from '../../modules/index';

export default function Appbar() {
  const classes = MTStyle();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [expandBabyCare, setExpandBabyCare] = useState(false);
  const [expandTrash, setExpandTrash] = useState(false);
  const [expandSpam, setExpandSpam] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButtonAppBar, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.link}>E-Com</Link>
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
              inputProps={{ 'aria-label': 'Search' }}
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
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl'
              ? <ChevronRightIcon />
              : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            'Offers',
            'Inbox',
            'Starred',
            'Send email',
            'Drafts',
          ].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>
                { text === 'Offers'
                  ? <Badge
                  className={classes.margin}
                  badgeContent={99}
                  color="primary"
                >
                <InboxIcon />
                </Badge> : <InboxIcon />}
              </ListItemIcon>

              <Link to={text.toLowerCase()} className={classes.link}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              menu: 'Baby Care',
              icon: <ChildCare />,
              subItems: [
                'Diapers & Wipes',
                'Feeders',
                'Fooding',
                'Bath & Skincare',
              ],
              state: expandBabyCare,
              updateState: expandBbyCare => setExpandBabyCare(!expandBbyCare),
            },
            {
              menu: 'Trash',
              icon: <Trash />,
              subItems: [
                'Diapers2 & Wipes',
                'Feeders',
                'Fooding',
                'Bath & Skincare',
              ],
              state: expandTrash,
              updateState: expandTrsh => setExpandTrash(!expandTrsh),
            },
            {
              menu: 'Spam',
              icon: <Drafts />,
              subItems: [],
              state: expandSpam,
              updateState: expandSpm => setExpandSpam(!expandSpm),
            },
          ].map((item, indx) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <ListItem
                key={indx}
                button
                onClick={() => {
                  item.updateState(item.state);
                  // eslint-disable-next-line no-unused-expressions
                  !item.state
                    && Array.isArray(item.subItems)
                    && item.subItems.length
                    && setOpen(true);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.menu} />
                {item.state ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={item.state} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Array.isArray(item.subItems)
                    && item.subItems.map(
                      (
                        subItem,
                        index,
                      ) => (
                        <ListItem key={index} button className={classes.nested}>
                          <ListItemIcon />
                          <ListItemText primary={subItem} />
                        </ListItem>
                      ),
                    )}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
