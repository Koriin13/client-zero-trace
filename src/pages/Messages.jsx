import { useState, useEffect, useRef } from 'react';


import './styles/Chat.css';

const Messages = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);
  const bottomRef = useRef(null);
  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          name: data.name,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });


    

	// Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket]);

  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messagesReceived]);

  return (
    
        <div className='messages'>
          
          {messagesReceived.map((msg, i) => (
            <div id='message-box'  key={i}>
              <div id='name-box'>
                <span >{msg.name} : </span>
                <span>
                  {formatDateFromTimestamp(msg.__createdtime__)}
                </span>
              </div>
              <p>{msg.message}</p>
              <br />
              <div ref={bottomRef} />
            </div>
            ))
              
            }

          </div>

  );
};

export default Messages;