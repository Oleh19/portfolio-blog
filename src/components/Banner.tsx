import { FC } from 'react';
import Container from './Container';

const Banner: FC = () => {
  return (
    <div className="bg-blog-blue shadow-banner text-white p-8 mb-8">
      <Container>
        <h1 className="drop-shadow-logo text-center text-6xl pb-2 ">Blog</h1>
        <p className="text-center text-xl font-light">A little description</p>
      </Container>
    </div>
  );
};

export default Banner;
