import React, { Component } from 'react';
import shortid from 'shortid';
import dummyData from '../../dummy-data';
import fuzzyFilterFactory from 'react-fuzzy-filter';
import Header from '../Header/Header';
import PostContainer from './PostContainer';

const { FilterResults, changeInputValue } = fuzzyFilterFactory();

const fuseConfig = {
  keys: ['username', 'comments.text', 'comments.username']
};

const initialState = {
  posts: [],
  filterTerms: ''
};

class PostPage extends Component {
  static defaultProps = initialState;

  state = {
    ...initialState,
    posts: dummyData.map(p => ({ ...p, id: shortid.generate() }))
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
    changeInputValue(e.target.value);
  };

  onCommentSubmit = (e, id, newComment) => {
    e.preventDefault();
    const { posts } = this.state;
    const index = posts.findIndex(p => p.id === id);
    const newPosts = [...posts];
    newPosts[index] = {
      ...posts[index],
      comments: [...posts[index].comments, newComment]
    };

    this.setState({
      posts: newPosts
    });
  };

  render() {
    const { posts, filterTerms } = this.state;
    const { logout } = this.props;
    return (
      <>
        <Header
          onSearchChange={this.onSearchChange}
          filterTerms={filterTerms}
          logout={logout}
        />
        <FilterResults items={posts} fuseConfig={fuseConfig}>
          {filteredPosts =>
            filteredPosts.map(post => (
              <PostContainer
                key={post.id}
                post={post}
                onLike={this.onLike}
                onCommentSubmit={this.onCommentSubmit}
              />
            ))
          }
        </FilterResults>
      </>
    );
  }
}

export default PostPage;
