import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => <div>This is a hat's page</div>;

function App() {
  return (
    <div className="App">
      <h1>Fashion Point</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
