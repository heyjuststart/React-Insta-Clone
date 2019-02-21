import React, { useReducer } from 'react';
import shortid from 'shortid';
import './App.css';
import dummyData from './dummy-data';
import fuzzyFilterFactory from 'react-fuzzy-filter';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';
import LoginPage from './components/Login/LoginPage';

const { FilterResults, changeInputValue } = fuzzyFilterFactory();

const fuseConfig = {
  keys: ['username', 'comments.text', 'comments.username']
};

const initialState = {
  posts: dummyData.map(p => ({ ...p, id: shortid.generate() })),
  filterTerms: '',
  loggedIn: false,
  username: ''
};

const likePost = (posts, id) => {
  const newPosts = [...posts];
  const index = newPosts.findIndex(p => p.id === id);
  newPosts[index].likes += 1;
  return newPosts;
};

const addComment = (posts, id, text, username) => {
  const newPosts = [...posts];
  const index = newPosts.findIndex(p => p.id === id);
  newPosts[index].comments.push({ username, text });
  return newPosts;
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'filter-change':
    return { ...state, filterTerms: action.payload };
  case 'like-post':
    return { ...state, posts: likePost(state.posts, action.payload) };
  case 'logged-in':
    return { ...state, username: action.payload, loggedIn: true };
  case 'logged-out':
    return { ...state, username: '', loggedIn: false };
  case 'add-comment':
    return {
      ...state,
      posts: addComment(
        state.posts,
        action.payload.id,
        action.payload.text,
        action.payload.username
      )
    };
  default:
    throw new Error();
  }
};

const PostContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (state.loggedIn) {
    return (
      <PostContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Header />
          <FilterResults items={state.posts} fuseConfig={fuseConfig}>
            {filteredPosts =>
              filteredPosts.map(post => (
                <PostContainer key={post.id} post={post} />
              ))
            }
          </FilterResults>
        </div>
      </PostContext.Provider>
    );
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <LoginPage />
      </div>
    </PostContext.Provider>
  );
};

export { PostContext, changeInputValue };
export default App;
