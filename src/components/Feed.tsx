import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetGlobalFeedQuery } from '../api/repository';
import { PAGE_SIZE } from '../consts';
import { serializeSearchParams } from '../utils/router';
import ArticleList from './ArticleList';
import Container from './Container';
import FeedToggle from './FeedToggle';
import Pagination from './Pagination';

const Feed: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 0
  );
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ page: page });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }));
    window.scrollTo(0, 0);
  };

  if (isLoading || isFetching) {
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
      <div className="mb-7">
        <Pagination
          amount={(data?.articlesCount || 0) / PAGE_SIZE}
          handlePageChange={handlePageChange}
          page={page}
        />
      </div>
    </Container>
  );
};

export default Feed;
