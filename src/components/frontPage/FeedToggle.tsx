import clsx from 'clsx';
import { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

const FeedToggle: FC = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  const classes = clsx(
    'bg-none border-b-2 border-blog-blue pb-[0.6rem] px-4 duration-300 transition-colors',
    {
      'text-black/30 border-black/30 hover:text-black hover:border-black': tag,
    }
  );

  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className={classes}
          >
            Global
          </NavLink>
          {tag && (
            <span
              className="text-blog-blue bg-none border-b-2
              border-blog-blue pb-[0.45rem] px-4 inline-block"
            >
              # {tag}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
