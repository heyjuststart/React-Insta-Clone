import React, { useContext, useState } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.scss';
import moment from 'moment';
import { PostContext } from '../../App';

const CommentSection = ({ comments, post }) => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(PostContext);

  function addComment(e) {
    e.preventDefault();
    dispatch({ type: 'add-comment', payload: { id: post.id, text } });
    setText('');
  }

  return (
    <div className="comments">
      {comments.map((c, i) => (
        <Comment {...c} key={i} />
      ))}
      <div className="timestamp">
        {moment(post.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}
      </div>
      <form action="#" className="search-form" onSubmit={addComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          className="add-comment"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
