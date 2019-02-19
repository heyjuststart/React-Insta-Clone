import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Heart, MessageCircle } from 'react-feather';
import './PostContainer.scss';

const PostContainer = ({
  post,
  onLike
}) => {
  return (
    <Card className="post-container">
      <div className="post-title">
        <img
          src={post.thumbnailUrl}
          className="user-thumbnail"
          alt={`${post.username} thumbnail`}
        />
        <span className="username">{post.username}</span>
      </div>
      <CardImg top width="100%" src={post.imageUrl} alt="Post Image" />
      <CardBody className="post-body">
        <div className="post-icons">
          <div className="icon-container">
            <Heart className="like-button" onClick={() => onLike(post.id)} />
            <div>{post.likes}</div>
          </div>
          <div className="icon-container">
            <MessageCircle />
            <div>{post.comments.length}</div>
          </div>
        </div>
        <CommentSection comments={post.comments} post={post} />
      </CardBody>
    </Card>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array
};

export default PostContainer;
