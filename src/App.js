import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StarsControl from "./components/Stars/StarsControl";
import List from "./components/List/List";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={StarsControl} />
            <Route exact path="/List" component={List} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
