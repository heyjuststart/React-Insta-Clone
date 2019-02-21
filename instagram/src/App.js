import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';
import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oleo+Script');
`;

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostPage);

class App extends Component {
  state = {
    username: '',
    loggedIn: false
  };

  onLoggedIn = loginObj => {
    this.setState(loginObj);
  };

  logout = () => {
    localStorage.clear();
    this.setState({ username: '', loggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <ComponentFromWithAuthenticate
          logout={this.logout}
          loggedIn={this.state.loggedIn}
          onLoggedIn={this.onLoggedIn}
        />
      </div>
    );
  }
}

// {/* <PostPage /> */}
export default App;
