import { FC } from 'react';
import { FeedData } from '../../api/repositoryFeed';
import { PAGE_SIZE } from '../../consts';
import { usePageParams } from '../../hooks/usePageParams';
import Skeleton from '../Skeleton';

import ArticleList from './ArticleList';

import Pagination from './Pagination';

interface Props {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

const Feed: FC<Props> = ({ isFetching, isLoading, error, data }) => {
  const { setPage, page } = usePageParams();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    window.scrollTo(0, 0);
  };

  if (isLoading || isFetching) {
    // return <Skeleton />;
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error while loading</p>;
  }

  if(data?.articlesCount === 0){
    return <p>No articles are here</p>
  }

  return (
    <>
      <ArticleList list={data?.articles || []} />
      <nav className="mb-7">
        <Pagination
          amount={(data?.articlesCount || 0) / PAGE_SIZE}
          handlePageChange={handlePageChange}
          page={page}
        />
      </nav>
    </>
  );
};

export default Feed;
