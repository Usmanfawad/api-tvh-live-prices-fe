import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import FormSubmission from './FormSubmission';
import LiveResults from './LiveResults';
import PreProcessing from './PreProcessing';
import PostProcessing from './PostProcessing';
import axios from 'axios';



const App = () => {
  const [formValues, setFormValues] = useState({
    customerCode: '',
    userPassword: '',
    customerPartNumber: 'Testanfrage teil',
    userText: 'Inquiry extra text',
    fallbackQuantity: 1,
    toUpdateArticles: 10000,
    parallelConnections: 1
  });

  const [websocket, setWebsocket] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {

    if (formSubmitted) {
        const socket = new WebSocket(`ws://localhost:8000/ws/${formValues.customerCode}/${formValues.userPassword}/${formValues.customerPartNumber}/${formValues.userText}/${formValues.fallbackQuantity}/${formValues.toUpdateArticles}/${formValues.parallelConnections}`);
        setWebsocket(socket);

        socket.onopen = () => {
          console.log('WebSocket connection opened.');
        };

        socket.onmessage = (event) => {
          const update = event.data;
          console.log(`Received update: ${update}`);
          // const update = JSON.parse(event.data);
          // console.log(update);
          setUpdates((prevUpdates) => [...prevUpdates, update]);
        };

        socket.onclose = () => {
          console.log('WebSocket connection closed.');
          setFormSubmitted(false);
        };
        
        return () => {
          socket.close();
        };
    }
  }, [formSubmitted]);

  const handleFormSubmit = async (e) => {
    
    e.preventDefault();
    
    if (!formValues.customerCode || !formValues.userPassword) {
      console.log("Error");
      return;
    }


    try {
      // Make a POST request to the FastAPI backend
      const response = await axios.post('http://localhost:8000', formValues);

      // Handle the response as needed
      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error submitting form:', error);
    }

    
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/preProcessing" element={<PreProcessing />} />
          <Route path="/postProcessing" element={<PostProcessing />} />
        </Routes>
      </Router>
      <FormSubmission formValues={formValues} setFormValues={setFormValues} onSubmit={handleFormSubmit} />
      <LiveResults updates={updates}/>
    </>
  );
};

export default App;