import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

const initialState = {
  posts: [],
  filterTerms: ''
};

class App extends Component {
  static defaultProps = initialState;

  state = {
    ...initialState,
    posts: dummyData.map(p => ({ ...p, id: shortid.generate() })),
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      posts: dummyData.map(p => ({ ...p, id: shortid.generate() }))
    });
  }

  onLike = id => {
    const { posts } = this.state;
    const foundIndex = posts.findIndex(p => p.id === id);
    const newArray = [...this.state.posts];
    newArray[foundIndex].likes += 1;

    this.setState({ posts: newArray });
  };

  onSearchChange = e => {
    this.setState({ filterTerms: e.target.value });
  }

  render() {
    const { posts, filterTerms } = this.state;
    const filteredPosts = posts.filter(p => p.username.indexOf(filterTerms) > -1);
    return (
      <div className="App">
        <Header onSearchChange={this.onSearchChange} filterTerms={filterTerms} />
        {filteredPosts.map((p, i) => (
          <PostContainer key={i} post={p} onLike={this.onLike} />
        ))}
      </div>
    );
  }
}

export default App;
