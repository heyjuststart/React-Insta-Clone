import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Heart, MessageCircle } from 'react-feather';
import styled, { createGlobalStyle } from 'styled-components';
import { UserName } from '../CommentSection/Comment';
import CommentSection from '../CommentSection/CommentSection';

const GlobalStyle = createGlobalStyle`
.post-container {
  width: 600px;
  margin: 10px 0;

  .post-body {
    font-size: 1.5rem;
  }

  .post-icons {
    display: flex;
    flex-direction: row;
    .icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-right: 10px;
      }
    }
  }

  .add-comment {
    margin-top: 10px;
    padding: 10px 0;
    border-top: 1px solid lightgrey;
    width: 100%;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
  }

  .timestamp {
    color: #717171;
    font-size: 1.4rem;
  }

  .like-button {
    cursor: pointer;
    user-select: none;
  }
}
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 30px;
  margin-right: 10px;
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PostIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin-right: 10px;
  }
`;

const PostContainer = ({ post, onLike, onCommentSubmit }) => {
  return (
    <Card className="post-container">
      <GlobalStyle />
      <PostTitle>
        <UserThumbnail
          src={post.thumbnailUrl}
          alt={`${post.username} thumbnail`}
        />
        <UserName>{post.username}</UserName>
      </PostTitle>
      <CardImg top width="100%" src={post.imageUrl} alt="Post Image" />
      <CardBody className="post-body">
        <PostIcons>
          <IconContainer>
            <Heart className="like-button" onClick={() => onLike(post.id)} />
            <div>{post.likes}</div>
          </IconContainer>
          <IconContainer>
            <MessageCircle />
            <div>{post.comments.length}</div>
          </IconContainer>
        </PostIcons>
        <CommentSection
          comments={post.comments}
          post={post}
          onCommentSubmit={onCommentSubmit}
        />
      </CardBody>
    </Card>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array
};

export default PostContainer;
