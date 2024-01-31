import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';


const defaultTheme = createTheme();


const FormSubmission = ({ formValues, setFormValues, onSubmit, isLoading, isFormError, isApiError }) => {
    
    const [openOne, setOpenOne] = useState(true);
    const [openTwo, setOpenTwo] = useState(true);
    const handleCloseErrorOne = () => {
        setOpenOne(false);
    };
    const handleCloseErrorTwo = () => {
        setOpenTwo(false);
    };


  const handleNumericInputChange = (e) => {
    // Allow only numeric values
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setFormValues({ ...formValues, [e.target.name]: numericValue });
  };

  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  
  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar
                sx={{
                    m: 1,
                    bgcolor: 'primary.main',
                }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Customer process form
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="customerCode"
                            label="Customer Code"
                            name="customerCode"
                            type="text"
                            value={formValues.customerCode}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            // disabled={disableFieldCondition}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userPassword"
                            label="Password"
                            name="userPassword"
                            type="password"
                            value={formValues.userPassword}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="customerPartNumber"
                            label="Customer Part Number"
                            name="customerPartNumber"
                            type="text"
                            value={formValues.customerPartNumber}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="userText"
                            label="Text"
                            name="userText"
                            type="text"
                            value={formValues.userText}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="fallbackQuantity"
                            label="Fallback Quantity"
                            name="fallbackQuantity"
                            type="number"
                            value={formValues.fallbackQuantity}
                            onChange={handleNumericInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="toUpdateArticles"
                            label="Amount of to update articles"
                            name="toUpdateArticles"
                            type="number"
                            value={formValues.toUpdateArticles}
                            onChange={handleNumericInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="parallelConnections"
                            label="Amount Of Parallel Connections"
                            name="parallelConnections"
                            type="number"
                            value={formValues.parallelConnections}
                            onChange={handleNumericInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Button
                disabled={isLoading}
                type="button"
                fullWidth
                variant="contained"
                sx=
                    {{
                        mt: 3,
                        mb: 2
                    }}
                onClick={onSubmit}
                >
                
                {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                
                </Button>
                
                {/* {error && <p>Error: {error.message}</p>}
                {response && <p>Response: {JSON.stringify(response)}</p>} */}
                {isFormError && openOne && (
                    <Alert severity="error" onClose={handleCloseErrorOne}>
                    Error, please fix form errors!
                    </Alert>
                )}
                {isApiError && openTwo && (
                    <Alert severity="error" onClose={handleCloseErrorTwo}>
                    Server error, make sure the backend server is running!
                    </Alert>
                )}
                
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
  );
};

export default FormSubmission;