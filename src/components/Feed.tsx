import { FC } from 'react';
import { useGetGlobalFeedQuery } from '../api/repository';
import ArticleList from './ArticleList';
import Container from './Container';
import FeedToggle from './FeedToggle';

const Feed: FC = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};

export default Feed;
