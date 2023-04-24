import { FC } from 'react';
import { FeedArticle } from '../../api/dto/getGlobalFeed';
import Article from './Articles';

interface Props {
  list: FeedArticle[];
}

const ArticleList: FC<Props> = ({ list }) => {
  return (
    <div>
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
