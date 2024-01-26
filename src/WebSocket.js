import React, { useState, useEffect } from 'react';

const WebSocket = () => {
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws');

    socket.onopen = () => {
      console.log('------------------WebSocket connection opened------------------');
    };

    socket.onmessage = (event) => {
      const newData = {"Result": "Success"};
      setLiveData((prevData) => [...prevData, newData]);
    };

    socket.onclose = () => {
      console.log('------------------WebSocket connection closed------------------');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Live Data Updates</h1>
      <ul>
        {liveData.map((data, index) => (
          <li key={index}>Haha</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocket;