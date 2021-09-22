import * as React from 'react'
import { Link } from 'gatsby'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import GamesMenu from './GamesMenu'



const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link to="/">
        <Button>
          The Well Played Game
        </Button>
      </Link>

      <GamesMenu />

      <Button
        id="component-button"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      Components
      </Button>
      
      <Menu
        id="component-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/dice">Dice</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar