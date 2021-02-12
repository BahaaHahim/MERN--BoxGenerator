import MessageDisplay from './Components/MessageDisplay'
import MessageForm from './Components/MessageForm'
import './App.css';
import React, {useState} from 'react'


function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
 
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( currentMsg.concat(newMessage));
}
  return (
    <div className="App">
        <MessageForm onNewMessage={ youveGotMail } />
        <MessageDisplay message={ currentMsg } />
    
    </div>
  );
}

export default App;
