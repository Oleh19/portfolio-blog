import { FC } from 'react';
import { useGetPopularTagsQuery } from '../../api/repositoryFeed';
import TagList from '../UI/TagList';

const TagCloud: FC = () => {
  const { data, error, isLoading, isFetching } = useGetPopularTagsQuery('');

  if (isLoading || isFetching) {
    return (
      <div className="bg-blog-lightGray pt-1 pb-2 px-2 rounded-lg">
        <p className="mb-2 text-white">Loading popular tags...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-blog-lightGray pt-1 pb-2 px-2 rounded-lg">
        <p className="mb-2 text-white">Error while loading popular tags...</p>
      </div>
    );
  }

  return (
    <div className="bg-blog-lightGray pt-1 pb-2 px-2 rounded-lg">
      <p className="mb-2 text-white">Popular tags</p>
      <TagList
        list={data!.tags}
        itemStyle="DARK"
        itemAs="a"
      />
    </div>
  );
};

export default TagCloud;
