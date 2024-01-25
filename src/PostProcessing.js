import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

import Loader from './Loader';


function PostProcessing() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const handlePostProcessing = async (e) => {
    try {
      console.log("Handle post processing")
      const response = await axios.post('http://localhost:8000/postProcessing');
      console.log(response.data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error submitting form:', error);
    }
  }

  useEffect(() => {
    handlePostProcessing();
  });

  return (
    <>
      <div>PostProcessing</div>
      <Loader open={loading} routeType="Post processing" />
    </>
    
  )
}

export default PostProcessing