import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header'

(async () => {
  const database = require('./db');
  const Credentials = require('./usuario');

  try {
      const resultado = await database.sync();
      console.log(resultado);
  } catch (error) {
      console.log(error);
  }
})();


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);