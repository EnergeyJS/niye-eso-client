import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DrawerMenuContext from "./context/DrawerMenuContext";
import useStyles from './styles/useStyles.js';

export default function TemporaryDrawer () {
  const classes = useStyles ();
  const [drawerIsOpen, setDrawerIsOpen] = useContext(DrawerMenuContext);
  const sideList = side => (
    <div className={`${classes.list} makeblue`} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map ((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map ((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
      <Drawer open={drawerIsOpen}>
        {sideList ('left')}
      </Drawer>
    </div>
  );
}
