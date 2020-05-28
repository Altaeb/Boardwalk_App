import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./screens/LoginScreen";
import Signup from "./screens/SignUpScreen";
import Home from "./screens/HomeScreen";
import Profile from "./screens/ProfileScreen";
import NewLoan from "./screens/NewLoan";
import Loans from "./screens/Loans";
import LoanCalculator from "./screens/LoanCalculator";

export default class App extends Component {
  state = {
    loggedIn: false,
    userId: null
  };

  handleAuth = (userId, loggedIn) => {
    this.setState({ loggedIn, userId });
  };

  render() {
    const { loggedIn, userId } = this.state;
    return (
      <Router
        titleStyle={{ color: "#fff" }}
        navBarButtonColor={"white"}
        headerMode={"float"}
      >
        {loggedIn ? (
          <Stack
            key="root"
            navigationBarStyle={{
              backgroundColor: "#395697"
            }}
          >
            <Scene
              key="home"
              component={() => (
                <Home handleAuth={this.handleAuth} userId={userId} />
              )}
              title="Home"
            />
            <Scene
              key="profile"
              component={() => <Profile userId={userId} />}
              title="Profile"
            />
            <Scene
              key="newLoan"
              component={() => <NewLoan userId={userId} />}
              title="New Loan"
            />
            <Scene
              key="loans"
              component={() => <Loans userId={userId} />}
              title="Loans"
            />
            <Scene
              key="loanCalc"
              component={LoanCalculator}
              title="Loan Calculator"
            />
          </Stack>
        ) : (
            <Stack
              key="root"
              navigationBarStyle={{
                backgroundColor: "#395697"
              }}
            >
              <Scene
                key="login"
                component={() => <Login handleAuth={this.handleAuth} />}
                title="Login"
              />
              <Scene
                key="signup"
                component={() => <Signup handleAuth={this.handleAuth} />}
                title="Signup"
              />
            </Stack>
          )}
      </Router>
    );
  }
}
