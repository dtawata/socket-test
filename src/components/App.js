import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const App = (props) => {
  const [socket, setSocket] = useState('');

  useEffect(() => {
    const connection = io('http://localhost:3010/', { autoConnect: false });
    setSocket(connection);
  }, [])

  useEffect(() => {
    if (socket) {
      socket.connect();
    }
  }, [socket])

  return (
    <div>{socket ? 'Connected' : 'Not Connected'}</div>
  );
};

export default App;