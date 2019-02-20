import React, { useReducer } from 'react';
import shortid from 'shortid';
import './App.css';
import dummyData from './dummy-data';
import fuzzyFilterFactory from 'react-fuzzy-filter';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

const { FilterResults, changeInputValue } = fuzzyFilterFactory();

const fuseConfig = {
  keys: ['username', 'comments.text', 'comments.username']
};

const initialState = {
  posts: dummyData.map(p => ({ ...p, id: shortid.generate() })),
  filterTerms: ''
};

const likePost = (posts, id) => {
  const newPosts = [...posts];
  const index = newPosts.findIndex(p => p.id === id);
  newPosts[index].likes += 1;
  return newPosts;
};

const addComment = (posts, id, text) => {
  const newPosts = [...posts];
  const index = newPosts.findIndex(p => p.id === id);
  newPosts[index].comments.push({ username: 'testUser', text });
  return newPosts;
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'filter-change':
    // had to make this a setTimeout to avoid setting state within a render
    setTimeout(() => changeInputValue(action.payload));
    return { ...state, filterTerms: action.payload };
  case 'like-post':
    return { ...state, posts: likePost(state.posts, action.payload) };
  case 'add-comment':
    return {
      ...state,
      posts: addComment(
        state.posts,
        action.payload.id,
        action.payload.text
      )
    };
  default:
    throw new Error();
  }
};

const PostContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
};

export { PostContext };
export default App;
