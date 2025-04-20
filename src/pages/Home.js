import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '2%' }}>
      <Typography variant="h3" sx={{ margin: '2% 0' }} align="center">
        Get Hired or Hire People for Free!
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2%' }}>
        <Button sx={{ margin: '1% 0', width: '200px' }} variant="outlined">
          <Link to="/employer/dashboard">Hire Talent</Link>
        </Button>
        <Button sx={{ margin: '1% 0', width: '200px' }} variant="outlined">
          <Link to="/employee/feed">Get a Job</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
