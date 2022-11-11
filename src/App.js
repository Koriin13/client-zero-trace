import { useState } from 'react';
import io from 'socket.io-client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Join from './pages/Join';
import Chat from './pages/Chat';

const socket = io.connect('http://localhost:3000'); // server will run on 5000 connect to it from here


function App() {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (

    <Router>

      <div className='App'>

        <Routes>
          <Route path='/' 
                element={<Join name={name} 
                setName={setName} 
                room={room} 
                setRoom={setRoom} 
                socket={socket} />}
          />

          <Route path='/chat'
                element={<Chat name={name} room={room} socket={socket} />}
          />      

        </Routes>

      </div>
    </Router>

   
  );
}

export default App;
