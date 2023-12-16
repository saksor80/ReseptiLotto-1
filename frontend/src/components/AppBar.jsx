import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// This component renders a static AppBar with centered text 'RESEPTILOTTO' for a header or title bar in a UI.
export default function SearchAppBar() {
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center'}} >   
          <Typography variant="h5" component="div" > RESEPTILOTTO </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}