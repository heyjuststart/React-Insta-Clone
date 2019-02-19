import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

const initialState = {
  posts: []
};

class App extends Component {
  static defaultProps = initialState;

  state = {
    posts: dummyData.map(p => ({ ...p, id: shortid.generate() }))
  };

  componentDidMount() {
    this.setState({ ...this.state, posts: dummyData.map(p => ({ ...p, id: shortid.generate() })) });
  }

  onLike = id => {
    const { posts } = this.state;
    const foundIndex = posts.findIndex(p => p.id === id);
    this.setState({
      ...this.state,
      posts: [
        ...posts.slice(0, foundIndex),
        { ...posts[foundIndex], likes: posts[foundIndex].likes + 1 },
        ...posts.slice(foundIndex + 1)
      ]
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Header />
        {posts.map((p, i) => (
          <PostContainer
            key={i}
            post={p}
            onLike={this.onLike}
          />
        ))}
      </div>
    );
  }
}

export default App;
