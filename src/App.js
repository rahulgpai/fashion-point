import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignInSignUpForms from "./pages/signin-signup-form/signin-signup-form";
import {
  auth,
  createUserProfileDocument
} from "./config/firebase/firebaseConfig.js";

const HatsPage = () => <div>This is a hat's page</div>;
const JacketsPage = () => <div>This is a jacket's page</div>;
const SneakersPage = () => <div>This is a sneaker's page</div>;
const WomensPage = () => <div>This is a women's page</div>;
const MensPage = () => <div>This is a mens's page</div>;

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({
        currentUser: userAuth
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <h1>Fashion Point</h1>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpForms} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/jackets" component={JacketsPage} />
          <Route path="/sneakers" component={SneakersPage} />
          <Route path="/women" component={WomensPage} />
          <Route path="/men" component={MensPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
