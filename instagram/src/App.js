import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oleo+Script');
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <AppContainer>
        { this.props.children }
        <GlobalStyles />
        <ComponentFromWithAuthenticate
          logout={this.logout}
          loggedIn={this.state.loggedIn}
          onLoggedIn={this.onLoggedIn}
        />
      </AppContainer>
    );
  }
}

export default App;
