import { AppBar, Typography, Button, Toolbar, Container } from '@mui/material';

import React from 'react';

const Appbar = () => {
    return (
        <Container>
            <Toolbar>
              <Typography variant="h6" flexGrow={1}>
              App Bar
             </Typography>
            <Button varaint="text" color="inherit" >
                Login
            </Button>    
            <Button varaint="text" color="inherit">
                Logout
            </Button>    
            </Toolbar>
         
        </Container>
    );
};

export default Appbar;