import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #464646;

  img {
    display: block;
    width: 200px;
    object-fit: cover;
  }
`;

export const ImageWrapper = styled.div`
  width: 250px;
`;

export const CardInfo = styled.div`
  padding-top: 10px;
  padding-left: 30px;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
