import React, { useState, useEffect } from 'react';


import React from 'react'

function useWebHook() {
    useEffect(() => {
        if (formSubmitted) {
          const socket = new WebSocket('ws://localhost:8000/ws');
    
          socket.onopen = () => {
            console.log('------------------WebSocket connection opened------------------');
          };
          
          socket.onmessage = (event) => {
            console.log(event.data); // Log the raw data
            const newData = JSON.parse(event.data);
            setLiveData((prevData) => [...prevData, newData]);
          };
    
          socket.onclose = () => {
            console.log('------------------WebSocket connection closed------------------');
          };
    
          return () => {
            socket.close();
          };
        }
      }, [formSubmitted]);
}

export default useWebHook