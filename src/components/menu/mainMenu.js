import React, { useContext } from 'react';


import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import DrawerMenuContext from '../context/DrawerMenuContext';


export default function mainMenu() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorEl, setAnchorEl] = useContext(DrawerMenuContext);
    const isMenuOpen = Boolean (anchorEl);
    function handleMenuClose () {
      setAnchorEl (null);
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          id={menuId}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );

      return renderMenu;
}