import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  li {
    border-radius: 2px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  img {
    width: 100%;
    height: 330px;
    object-fit: cover;
  }

  li:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  margin-top: 10px;
  padding: 4px;
  font-size: 12px;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: 700;
  line-height: 1.2;
  padding-right: 7px;

  color: #000;
  text-decoration: none;
`;

export const Rating = styled.span`
  width: 36px;
  height: 16px;
  line-height: 1.17;
  padding: 0px 4px;

  color: white;
  background-color: orange;
  border-radius: 5px;
  text-decoration: none;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
