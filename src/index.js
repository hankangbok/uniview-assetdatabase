import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class DataBaseShell extends React.Component {
  render() {
    return(
      <div>
        <h1>This is where the header will go</h1> 
        <h2>This is where the database will go</h2> 
        <h3>And this will be the credits/footer information</h3>
      </div>
    );
  }
}

ReactDOM.render(<DataBaseShell />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
