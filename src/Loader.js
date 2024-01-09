import React from 'react';

import Typography from '@mui/material/Typography';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader = ({ open , routeType }) => {
  return (
    <Backdrop open={open} style={{ zIndex: 9999 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            {routeType} script Running.
        </Typography>
        <CircularProgress color="primary" />



    </Backdrop>
  );
};

export default Loader;