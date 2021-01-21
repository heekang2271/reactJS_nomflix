import React from 'react';
import Router from './Router.js';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;
