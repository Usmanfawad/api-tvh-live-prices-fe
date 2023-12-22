import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyNotification = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Set a timeout to automatically close the notification after 10 seconds
    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 10000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return ReactDOM.createPortal(
    <Snackbar open={open} autoHideDuration={10000} onClose={() => setOpen(false)}>
      <Alert onClose={() => setOpen(false)} severity="info">
        This is a notification that will disappear in 10 seconds.
      </Alert>
    </Snackbar>,
    document.body
  );
};

export default MyNotification;