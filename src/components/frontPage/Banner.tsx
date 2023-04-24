import { FC } from 'react';
const Banner: FC = () => {
  return (
    <div className="bg-blog-blue shadow-banner text-white p-8 mb-8">
        <h1 className="drop-shadow-logo text-center text-6xl pb-2 ">Blog</h1>
        <p className="text-center text-xl font-light">A little description</p>
    </div>
  );
};

export default Banner;
