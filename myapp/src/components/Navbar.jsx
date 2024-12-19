import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY APP
                  </Typography>
                  <Link to='/login'>
                    <Button variant="contained">Login</Button>
                  </Link>
                  < Link to='/signup'>
                    <Button variant="contained">Sign up</Button>
                  </Link>
                  < Link to='/state'>
                    <Button variant="contained">State</Button>
                  </Link>
                   < Link to='/counter'>
                    <Button variant="contained">Counter</Button>
                  </Link>
                  < Link to='/Btnnaming'>
                    <Button variant="contained">Btnnaming</Button>
                  </Link>
                  < Link to='/api'>
                    <Button variant="contained">api</Button>
                  </Link>
                  < Link to='/Cardadd'>
                    <Button variant="contained">Card</Button>
                  </Link>

          

        </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
