import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostPage);

class App extends Component {
  state = {
    username: '',
    loggedIn: false
  };

  // componentDidMount() {
  //   const maybeUsername = localStorage.getItem('username');
  //   localStorage.setItem('loggedIn', this.state.loggedIn);
  //   if (maybeUsername) {
  //     this.setState({ username: maybeUsername, loggedIn: true });
  //   }
  // }
  //
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
