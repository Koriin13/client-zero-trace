import React from "react";
import RoomAndUsersColumn from './RoomAndUsers'


import './styles/Chat.css';

import MessagesReceived from './Messages';
import SendMessage from './Send-message';


const Chat = ({name, room, socket }) => {

  
  return (     
        <div id="main_container" className="scrollbar scrollbar-primary">
          
            {/* LIST WINDOW */}
            <div id="list">
              
              <RoomAndUsersColumn socket={socket} name={name} room={room} />

            </div>


            {/* CHAT WINDOW */}
            <div id="chat">
              
              <div id="room_header">
                <p id="room_name">&nbsp;{room}&nbsp; </p>
              </div>


              <div id="outer-chat">

                  <div id="main-chat">
                    <MessagesReceived socket={socket} />
                  </div>

                {/* Send Message */}
                  <SendMessage socket={socket} name={name} room={room} />
                </div>
              </div>



        </div>   
  );
};

export default Chat;