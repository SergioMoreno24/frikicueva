import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*function App(){
  return <p>Hola Mundo</p>
}*/

/*let App = () => {
  return(
    <p>Hola Mundo</p>
  )
}*/

//Estos componentes deben regresar un nodo
/*let App = () => {
  return(
    <>
      <p>Hola Mundo</p>
      <a href="https://www.facebook.com">Link</a>
    </>
  )
}*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
