import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FeedArticle } from '../../api/dto/getGlobalFeed';
import MyArticleAuthor from '../UI/MyArticleAuthor';
import MyButtonFavorite from '../UI/MyButtonFavorite';
import TagList from '../UI/TagList';

interface Props extends FeedArticle {}

const Article: FC<Props> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
  slug,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center justify-between ">
          <MyArticleAuthor
            author={author}
            createdAt={createdAt}
          />
          <MyButtonFavorite count={favoritesCount} />
        </div>
        <Link
          to={`/article/${encodeURIComponent(slug)}`}
          className="bg-none"
        >
          <h1 className="mb-1 font-semibold text-2xl">{title}</h1>
          <p className="text-blog-gray font-light mb-1">{description}</p>
        </Link>
        <div className="flex justify-between">
          <span className="text-blog-lightGray text-sm font-light">
            Read more...
          </span>
          <TagList list={tagList} />
        </div>
      </div>
    </article>
  );
};

export default Article;
