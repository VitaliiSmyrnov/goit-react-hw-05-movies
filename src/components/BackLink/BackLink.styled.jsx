import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkGoBack = styled(Link)`
  padding: 3px 10px;
  border: none;
  border-radius: 5px;

  display: inline-flex;
  align-items: center;
  gap: 3px;

  text-decoration: none;
  color: inherit;
  background-color: #e2dede;
  cursor: pointer;

  :hover,
  :focus {
    color: white;
    background-color: orange;
    border: none;
  }
`;
