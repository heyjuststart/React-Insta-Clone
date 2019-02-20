import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostPage);

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

// {/* <PostPage /> */}
export default App;
