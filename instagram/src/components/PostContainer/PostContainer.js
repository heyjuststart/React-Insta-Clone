import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Heart, MessageCircle } from 'react-feather';
import styled from 'styled-components';
import { UserName } from '../CommentSection/Comment';
import CommentSection from '../CommentSection/CommentSection';

const PostCard = styled(Card)`
  width: 600px;
  margin: 10px 0;
`;

const PostCardBody = styled(CardBody)`
  font-size: 1.5rem;
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

const LikeButton = styled(Heart)`
  cursor: pointer;
  user-select: none;
`;

const PostContainer = ({ post, onLike, onCommentSubmit }) => {
  return (
    <PostCard>
      <PostTitle>
        <UserThumbnail
          src={post.thumbnailUrl}
          alt={`${post.username} thumbnail`}
        />
        <UserName primary>{post.username}</UserName>
      </PostTitle>
      <CardImg top width="100%" src={post.imageUrl} alt="Post Image" />
      <PostCardBody>
        <PostIcons>
          <IconContainer>
            <LikeButton
              className="like-button"
              onClick={() => onLike(post.id)}
            />
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
      </PostCardBody>
    </PostCard>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array
};

export default PostContainer;
