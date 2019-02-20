import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.scss';
import moment from 'moment';

const initialState = {
  comments: [],
  post: null,
  newComment: {
    username: 'testUser',
    text: ''
  }
};

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      post: this.props.post,
      newComment: initialState.newComment
    };
  }

  componentDidMount() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({ newComment: { ...initialState.newComment, username } });
    }
  }

  onCommentChange = e => {
    const { newComment } = this.state;
    this.setState({
      ...this.state,
      newComment: { ...newComment, text: e.target.value }
    });
  };

  render() {
    const { newComment, comments, post } = this.state;
    const { onCommentSubmit } = this.props;
    return (
      <div className="comments">
        {comments.map((c, i) => (
          <Comment {...c} key={i} />
        ))}
        <div className="timestamp">
          {moment(post.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}
        </div>
        <form
          action="#"
          className="search-form"
          onSubmit={e => {
            onCommentSubmit(e, post.id, newComment);
            this.setState({
              ...this.state,
              comments: [...comments, newComment],
              newComment: { ...newComment, text: '' }
            });
          }}
        >
          <input
            type="text"
            placeholder="Add a comment..."
            className="add-comment"
            value={newComment.text}
            onChange={this.onCommentChange}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
