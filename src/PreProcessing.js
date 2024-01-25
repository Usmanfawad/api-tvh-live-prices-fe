import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

import Loader from './Loader';


function PreProcessing() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const handlePreProcessing = async (e) => {
    try {
      console.log("Handle pre processing")
      const response = await axios.post('http://localhost:8000/preProcessing');
      console.log(response.data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error submitting form:', error);
    }
  }

  useEffect(() => {
    handlePreProcessing();
  });

  return (
    <>
      <div>PreProcessing</div>
      <Loader open={loading} routeType="Pre processing" />
    </>
    
  )
}

export default PreProcessing