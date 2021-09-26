import * as React from 'react'
import { Link } from 'gatsby'
import Button from '@mui/material/Button';
import GamesMenu from './GamesMenu'



const NavBar = () => {

  return (
    <div>
      <Link to="/">
        <Button>
          The Well Played Game
        </Button>
      </Link>
      <GamesMenu />
      <Link to="/redux">
        <Button>
          Redux
        </Button>
      </Link>

    </div>
  );
}

export default NavBar