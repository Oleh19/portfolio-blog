import { FC } from 'react';
import Container from '../layouts/Container';
import MyFollowButton from '../UI/MyFollowButton';

const Banner: FC = () => {
  return (
    <div className="bg-blog-lightGray pt-8 pb-4 pr-5 ">
      <Container>
        <div className="">
          <img
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="logo"
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-center font-bold text-2xl">Full Name</h2>
        </div>
        <div className="flex justify-end">
          <MyFollowButton />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
