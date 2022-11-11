import React from "react";
import { useNavigate } from 'react-router-dom';

import icon from './images/chat_ico.png'
import './styles/Join.css';

const Join = ({ name, setName, room, setRoom, socket }) => {

  const navigate = useNavigate(); 

  const joinRoom = () => {
    if (room !== '' && name !== '') {
      socket.emit('join_room', { name, room });
    }

     // Redirect to chat
     navigate('/chat', { replace: true });
  };

  return (
      <div id="joinOuter">

        <div id="joinInner">

            <img id="icon" src={icon} alt="" />

            <div id="form-area">
            <br></br>
                  <p className="join-p">Sign in to chat!</p>


                  <div className="form-floating">
                    <input id='floating-name' className="form-control" type="text"  placeholder="Name" onChange={e => { setName(e.target.value); }} spellCheck="false"required />
                    <label for="floating-name">Name</label>
                  </div>
                  <br></br>

                  <div className="form-floating">
                    <input id="floating-room" className="form-control" type="text" placeholder="Room" onChange={e => { setRoom(e.target.value); }}  spellCheck="false" required />
                    <label for="floating-room">Room</label>
                  </div>
                  <br></br>
                  <br></br>
                  <div id="join-btn" ><button className="btn btn-three" onClick={joinRoom}> Join Room</button></div> 
            </div>
            <br></br>
            <br></br>
        </div>
      </div>
  );
};

export default Join;
