import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
import SignIn from './SignIn';
import LiveResults from './LiveResults'; // New component for live updates

const App = () => {
  const [liveData, setLiveData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const socket = new WebSocket('ws://localhost:8000/ws');

      socket.onopen = () => {
        console.log('WebSocket connection opened.');
      };

      socket.onmessage = (event) => {
        console.log(event.data);
        // console.log(dataToJson);
        const newData = JSON.parse(event.data);
        setLiveData((prevData) => [...prevData, newData]);
        console.log("The live data is:");
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed.');
      };

      return () => {
        socket.close();
      };
    }
  }, [formSubmitted, liveData]);

  const handleFormSubmit = async (formData) => {
    // Simulate API call for form submission
    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);

    // Set formSubmitted to true after successful form submission
    setFormSubmitted(true);
  };

  return (
    <div>
      <SignIn onSubmit={handleFormSubmit} />
      {formSubmitted && <LiveResults liveData={liveData} />}
    </div>
  );
};

export default App;