import { Component } from 'react';
import LoginButton from './LoginButton/LoginButton';
import LogoutButton from './LogoutButton/LogoutButton';
import Profile from './Profile/Profile';
import './App.css';

class App extends Component {

render(){
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  )
}
  
}

export default App;
