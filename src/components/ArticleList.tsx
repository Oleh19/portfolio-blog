import { FC } from 'react';
import { FeedArticle } from '../api/dto/getGlobalFeed';
import Article from './Article';

interface Props {
  list: FeedArticle[];
}

const ArticleList: FC<Props> = ({ list }) => {
  return (
    <div className="w-3/4">
      {list.map((article) => (
        <Article
          key={article.slug}
          {...article}
        />
      ))}
    </div>
  );
};

export default ArticleList;
