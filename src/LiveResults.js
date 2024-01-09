import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';
import { List, ListItem, Paper, Typography } from '@mui/material';


const LiveResults = ({ updates, isLoading }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const paperWidth = isMobile ? 400 : 600;

  return (
    <Container component="main" maxWidth="xl">
      <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
      >
        <Paper
          sx={{
            backgroundColor: '#0F1924',
            color: 'white',
            height: '300px', // Set a fixed height
            width: paperWidth,
            padding: theme.spacing(2),
            overflowY: 'auto', // Enable vertical scrolling
            // overflowX: 'hidden',
            // padding: '1rem',
            borderRadius: '8px',
            marginTop: '16px',
          }}
        >
          <Typography variant="body2" component="pre">
            <code>
              <List>
                <ListItem>
                  <Typography variant="overline" display="block" sx={{ color: '#bccbe3' }} gutterBottom>
                      REAL-TIME UPDATES HERE...
                  </Typography>
                </ListItem>
              </List>
            
              <List>
                {updates.map((update, index) => (
                  <ListItem key={index} sx={{ textDecoration: 'none', color: '#666362' }}>
                    <Typography variant="caption" display="block" sx={{ color: '#bccbe3' }} gutterBottom>
                      {/* {JSON.stringify(update)} */}
                      {update}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </code>
          </Typography>
        </Paper>
      
        
      </Box>
      
    </Container>
    
  );
};

export default LiveResults;