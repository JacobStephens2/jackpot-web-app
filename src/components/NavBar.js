import * as React from 'react'
import { Link } from 'gatsby'
import Button from '@mui/material/Button';

const NavBar = () => {

  return (
    <div>
      <Link to="/">
        <Button>
          The Well Played Game
        </Button>
      </Link>
      <Link to="/die-roller">
        <Button>
          Die Roller
        </Button>
      </Link>
      <Link to="/jackpot">
        <Button>
          Jackpot
        </Button>
      </Link>

    </div>
  );
}

export default NavBar