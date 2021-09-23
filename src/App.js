import React from 'react';
import './App.css'

function App() {
    return (
        <div className="App">
            <div className="register">
                <h1>Registratiion</h1>
                <label>Username</label>
                <input type="text" placeholder="Username..."></input>
                <label>Password</label>
                <input type="password" placeholder="Password..."></input>
                <button className="regButton">Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" placeholder="Username..."></input>
                <label>Password</label>
                <input type="password" placeholder="Password..."></input>
                <button className="logButton">Login</button>
            </div>
        </div>
    );
}

export default App;