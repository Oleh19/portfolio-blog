import { DateTime } from 'luxon';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../api/dto/getGlobalFeed';

interface Props {
  author: Author;
  publishedAt: string;
}

const MyArticleCommit: FC<Props> = ({ author, publishedAt }) => {
  return (
    <div className="flex">
      <div className="inline-block items-center">
        <div className="flex gap-2">
          <Link
            to={`/${author.username}`}
            className="bg-none"
          >
            <img
              src={author.image}
              alt={author.username}
              className="inline-block h-5 w-5 rounded-full "
            />
          </Link>
          <div className="mr-6 gap-2 leading-4 inline-flex flex-row items-center ">
            <Link
              to={`/${encodeURIComponent(author.username)}`}
              className=" font-medium text-sm bg-none border-none "
            >
              {author.username}
            </Link>
            <span className="text-blog-gray text-sm">
              {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticleCommit;
