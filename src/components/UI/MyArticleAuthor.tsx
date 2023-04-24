import { DateTime } from 'luxon';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../api/dto/getGlobalFeed';

interface Props {
  author: Author;
 publishedAt: string;
}

const MyArticleAuthor: FC<Props> = ({ author, publishedAt }) => {
  return (
    <div className="flex items-center">
      <Link
        to={`/${author.username}`}
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
          to={`/${encodeURIComponent(author.username)}`}
          className="font-medium  pb-1 "
        >
          {author.username}
        </Link>
        <span className="text-blog-gray text-base">
          {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}
          {/* {createdAt} */}
        </span>
      </div>
    </div>
  );
};

export default MyArticleAuthor;
