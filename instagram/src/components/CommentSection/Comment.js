import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserName = styled.span`
  font-weight: bold;
`;

const Comment = ({ text, username }) => (
  <div className="comment">
    <UserName>{username}</UserName>
    {' ' + text}
  </div>
);

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
};

export default Comment;
