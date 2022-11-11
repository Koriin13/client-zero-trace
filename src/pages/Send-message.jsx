import React, { useState } from 'react';

const SendMessage = ({ socket, name, room }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now();

     
      socket.emit('send_message', { name, room, message, __createdtime__ });
      setMessage('');
    }
  };

  return (
  <div id='parent-chat'>
    

    <div id='inner-box'>
      <input placeholder='Message...' onChange={(e) => setMessage(e.target.value)} value={message} />
      <button id='send' className='btn-three btn-chat' onClick={sendMessage}> Send Message</button>
      </div>

    
    </div>
  );
};

export default SendMessage;