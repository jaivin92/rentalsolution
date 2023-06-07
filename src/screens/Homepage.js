import React from "react";
import { Button, Container, Grid,Typography } from "@mui/material";
import {createTheme, ThemeProvider } from '@mui/material/styles';
import { Appbar, CakeSection, ContactUs, HeroSection, NavBar } from "components";


const theme = createTheme({
  palette: {
    primary: {
      main: '#864370',
    },
  },
});

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      {/* <Appbar /> */}
      {/* <Button variant="outlined">Start 1</Button> */}
      <Container >
      <Button variant="outlined">Start 2</Button>
      
      <HeroSection /> 
          <CakeSection />
          <ContactUs />
      </Container>
    </ThemeProvider>
  );
}

export default Homepage;
