import { FC } from 'react';
import ArticleList from './ArticleList';
import Container from './Container';
import FeedToggle from './FeedToggle';

const Feed: FC = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};

export default Feed;
