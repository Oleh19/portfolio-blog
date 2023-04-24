import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetGlobalFeedQuery } from '../api/repositoryFeed';
import Banner from '../components/frontPage/Banner';
import Feed from '../components/frontPage/Feed';
import FeedToggle from '../components/frontPage/FeedToggle';
import TagCloud from '../components/frontPage/TagCloud';
import Container from '../components/layouts/Container';
import { usePageParams } from '../hooks/usePageParams';

const FrontPage: FC = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParams();

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  return (
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className="flex">
          <div className="w-3/4">
            <Feed
              data={data}
              error={error}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          </div>
          <div className="pl-5 w-1/4">
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FrontPage;
