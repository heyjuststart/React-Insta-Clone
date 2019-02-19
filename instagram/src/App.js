import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

const initialState = {
  posts: [],
  newComment: {
    username: 'testUser',
    comment: ''
  }
};

class App extends Component {
  static defaultProps = initialState;

  state = {
    posts: dummyData.map(p => ({ ...p, id: shortid.generate() })),
    newComment: initialState.newComment
  };

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

  onCommentChange = e => {
    const { newComment } = this.state;
    this.setState({
      ...this.state,
      newComment: { ...newComment, comment: e.target.value }
    });
  };

  render() {
    const { posts, newComment } = this.state;
    return (
      <div className="App">
        <Header />
        {posts.map((p, i) => (
          <PostContainer
            key={i}
            post={p}
            newComment={newComment}
            onLike={this.onLike}
            onCommentChange={this.onCommentChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
