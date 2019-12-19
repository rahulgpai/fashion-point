import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignInSignUpForms from "./pages/signin-signup-form/signin-signup-form";
import {
  auth,
  createUserProfileDocument
} from "./config/firebase/firebaseConfig.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/user/userActions";

const HatsPage = () => <div>This is a hat's page</div>;
const JacketsPage = () => <div>This is a jacket's page</div>;
const SneakersPage = () => <div>This is a sneaker's page</div>;
const WomensPage = () => <div>This is a women's page</div>;
const MensPage = () => <div>This is a mens's page</div>;

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <h1>Fashion Point</h1>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInSignUpForms></SignInSignUpForms>
              )
            }
          />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
