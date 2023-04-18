import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetGlobalFeedQuery } from '../api/repository';
import Banner from '../components/frontPage/Banner';
import Feed from '../components/frontPage/Feed';

const FrontPage: FC = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  return (
    <>
      <Banner />
      <Feed
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </>
  );
};

export default FrontPage;
