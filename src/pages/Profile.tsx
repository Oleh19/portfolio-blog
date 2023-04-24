import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetProfileFeedQuery } from '../api/repositoryFeed';
import { useGetProfileQuery } from '../api/repositoryProfile';
import Feed from '../components/frontPage/Feed';
import FeedToggle from '../components/frontPage/FeedToggle';
import Banner from '../components/profilePage/Banner';
import { usePageParams } from '../hooks/usePageParams';

const Profile: FC = () => {
  const { page } = usePageParams();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data: profileInfo, isLoading: profileLoading } = useGetProfileQuery({
    username: profile!,
  });

  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    autor: profile!,
    isFavorite: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`),
  });

  const feedToggleItems = [
    {
      text: 'Favorites Articles',
      link: `/${encodeURIComponent(profile!)}/favorites`,
    },
  ];

  if (profileLoading) {
    return null;
  }

  return (
    <>
      <Banner profile={profileInfo!.profile} />
      <FeedToggle
        defaultText="My Articles"
        defaultLink={`/${encodeURIComponent(profile!)}`}
        items={feedToggleItems}
      />
      <Feed
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </>
  );
};

export default Profile;
