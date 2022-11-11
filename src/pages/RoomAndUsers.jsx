
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



import icon from './images/chat_ico.png'

const RoomAndUsers = ({ socket, name, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  const navigate = useNavigate();

  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on('chatroom_users', (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off('chatroom_users');
  }, [socket]);

  const leaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit('leave_room', { name, room, __createdtime__ });
    // Redirect to home page
    navigate('/', { replace: true });
  };




  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [roomUsers]);


  return (
    
    <div id='room'>
      
{/* CHAT ICON */}
<img id="icon_chat" src={icon} alt="" />
      <h3>Zero Trace</h3>
     

      
      <br />

      <br />
      <h5 >Users:</h5>
      <div id='users'>

      

        <ul className='list-group'>
        
          {roomUsers.map((user) => (
            <li className='list-group-item'
              style={{
                fontWeight: `${user.name === name ? 'bold' : 'normal'}`,
              }}
              key={user.id}>
              {user.name}
            </li>
          ))}

        </ul>
      
      </div>

      <div className='leave_btn'>
      <button id='btn_leave' className='btn-three btn-chat' onClick={leaveRoom}>
        Leave
      </button>
      </div>
      <div ref={bottomRef} />
    </div>
  
  );
};

export default RoomAndUsers;