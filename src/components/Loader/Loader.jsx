import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="2.5"
        animationDuration="1.10"
        width="76"
        visible={true}
      />
    </Wrapper>
  );
};
