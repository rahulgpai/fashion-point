import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";

const HatsPage = () => <div>This is a hat's page</div>;
const JacketsPage = () => <div>This is a jacket's page</div>;
const SneakersPage = () => <div>This is a sneaker's page</div>;
const WomensPage = () => <div>This is a women's page</div>;
const MensPage = () => <div>This is a mens's page</div>;

function App() {
  return (
    <div className="App">
      <h1>Fashion Point</h1>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/women" component={WomensPage} />
        <Route path="/men" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
