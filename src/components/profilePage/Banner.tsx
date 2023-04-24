import { FC } from 'react';
import { Profile } from '../../api/dto/getProfile';
import Container from '../layouts/Container';
import MyFollowButton from '../UI/MyFollowButton';

interface Props {
  profile: Profile;
}

const Banner: FC<Props> = ({ profile }) => {
  return (
    <div className="bg-blog-lightGray pt-8 pb-4 pr-5 mb-5 ">
      <Container>
        <div className="">
          <img
            src={profile.image}
            alt={`${profile.username}`}
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-center font-bold text-2xl">{profile.username}</h2>
        </div>
        <div className="flex justify-end">
          <MyFollowButton username={profile.username} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
