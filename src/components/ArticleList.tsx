import { FC } from 'react';
import Article from './Article';

const ArticleList: FC = () => {
  return (
    <div className="w-3/4">
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default ArticleList;
