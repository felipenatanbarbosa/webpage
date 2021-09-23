import React from 'react';
import './App.css';
const Sequelize = require('sequelize')

function App() {
    return (
        <div className="App">
            <div className="register">
                <h1>Registratiion</h1>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Username..."


                    ></input>
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Password..."
                    
                    
                    ></input>
                <button className="regButton" onClick={registerClickListener}>Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Username..."
                    
                    
                    ></input>
                <label>Password</label>

                <input 
                    type="password" 
                    placeholder="Password..."


                    ></input>
                <button className="logButton" onClick={loginClickListener}>Login</button>
            </div>
        </div>
    );
}

// const databaseCreate = await Credential.create({
//     username: 'abc',
//     password: '123',
// })

// console.log(databaseCreate)

function loginClickListener() {
    alert("lorem ipsum") //placeholder
}

function registerClickListener() {
    alert("lorem ipsum but register") //placeholer
}

export default App; 