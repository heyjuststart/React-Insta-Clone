import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const UserName = styled.span`
  font-weight: bold;

  ${props => props.primary && css`font-size: 2rem;`}
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
