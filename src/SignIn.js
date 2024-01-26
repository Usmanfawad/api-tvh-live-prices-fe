import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// import useFormSubmit from './hooks/useFormSubmit';



const defaultTheme = createTheme();

const SignIn = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        customerCode: '',
        customerPartNumber: '',
        userText: '',
        fallbackQuantity: '',
        toUpdateArticles: '',
        parallelConnections: '',
        tblCacheArticles: '',
        userPassword: ''
    });

    const disableFieldCondition = false;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    // const { formData, isLoading, error, response, handleChange, handleSubmit, formSubmitted, liveData } = useFormSubmit(
    //     {
    //         customerCode: '',
    //         customerPartNumber: '',
    //         userText: '',
    //         fallbackQuantity: '',
    //         toUpdateArticles: '',
    //         parallelConnections: '',
    //         tblCacheArticles: '',
    //         userPassword: ''
    
    //     },
    //     'http://127.0.0.1:8000/'
    //   );

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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                            value={formData.customerCode}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled={disableFieldCondition}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            // required
                            fullWidth
                            id="userPassword"
                            label="Password"
                            name="userPassword"
                            type="password"
                            value={formData.tblCacheArticles}
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
                            value={formData.customerPartNumber}
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
                            value={formData.userText}
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
                            type="text"
                            value={formData.fallbackQuantity}
                            onChange={handleChange}
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
                            type="text"
                            value={formData.toUpdateArticles}
                            onChange={handleChange}
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
                            type="text"
                            value={formData.parallelConnections}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Button
                // disabled={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx=
                    {{
                        mt: 3,
                        mb: 2
                    }}
                >
                    Submit
                {/* {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Submit'} */}
                
                </Button>
                
                {/* {error && <p>Error: {error.message}</p>}
                {response && <p>Response: {JSON.stringify(response)}</p>} */}

            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}




export default SignIn;