import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FeedData } from '../../api/repository';
import { PAGE_SIZE } from '../../consts';
import { serializeSearchParams } from '../../utils/router';
import Container from '../layouts/Container';
import Skeleton from '../Skeleton';

import ArticleList from './ArticleList';

import FeedToggle from './FeedToggle';
import Pagination from './Pagination';
import TagCloud from './TagCloud';

interface Props {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

const Feed: FC<Props> = ({ isFetching, isLoading, error, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setSearchParams(serializeSearchParams({ page: String(selected) }));
    window.scrollTo(0, 0);
  };

  if (isLoading || isFetching) {
    return (
      <Container>
        <Skeleton />
      </Container>
    );
  }

  if (error) {
    return <Container>Error while loading</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
        <div className="pl-3 w-1/4">
          <TagCloud />
        </div>
      </div>
      <nav className="mb-7">
        <Pagination
          amount={(data?.articlesCount || 0) / PAGE_SIZE}
          handlePageChange={handlePageChange}
          page={page}
        />
      </nav>
    </Container>
  );
};

export default Feed;
