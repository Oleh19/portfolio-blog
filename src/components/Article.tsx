// import  {DateTime}  from 'luxon';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FeedArticle } from '../api/dto/getGlobalFeed';
import MyButtonFavorite from './UI/MyButtonFavorite';
import TagList from './UI/TagList';

interface Props extends FeedArticle {}

const Article: FC<Props> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center justify-between ">
          <div className="flex items-center">
            <Link
              to={`/@${author.username}`}
              className="bg-none"
            >
              <img
                src={author.image}
                alt={author.username}
                className="inline-block h-8 w-8 rounded-full "
              />
            </Link>
            <div className="mr-6 ml-1 leading-4 inline-flex flex-col">
              <Link
                to={`/@${author.username}`}
                className="font-medium  pb-1 "
              >
                {author.username}
              </Link>
              <span className="text-blog-gray text-base">
                {/* {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)} */}
                {createdAt}
              </span>
            </div>
          </div>
          <MyButtonFavorite count={favoritesCount} />
        </div>
        <Link
          to="/article/1"
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
