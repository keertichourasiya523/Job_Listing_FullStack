import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box sx={{ padding: '3%', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '2%' }} align="center">
        Employer Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          variant="outlined"
          sx={{ marginBottom: '1rem', width: '50%' }}
          component={Link} // Use Link as the component for Button
          to="/employer/create" // Specify the link destination
        >
          Create Job Post
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
