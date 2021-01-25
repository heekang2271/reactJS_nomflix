import React from 'react';
import Router from './Router.js';
import GlobalStyles from './GlobalStyles.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router />
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
