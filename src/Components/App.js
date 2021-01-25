import React from "react";
import Router from "./Router.js";
import GlobalStyles from "./GlobalStyles.js";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <GlobalStyles />
                <Router />
            </div>
        );
    }
}

export default App;