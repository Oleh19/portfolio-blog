import clsx from 'clsx';
import { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

interface FeedToggleItem {
  text: string;
  link: string;
}

interface Props {
  defaultText?: string;
  defaultLink?: string;
  items?: FeedToggleItem[];
}

const FeedToggle: FC<Props> = ({
  defaultText = 'Global',
  defaultLink = '/',
  items = [],
}) => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  const classes = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'bg-none border-blog-blue  pb-[0.6rem] px-4 hover:no-underline border-b-2',
      {
        'text-gray-300  hover:text-black/30 hover:border-black/30 border-gray-300 ':
          tag || !isActive,
        'border-b-2 text-blog-blue': !tag && isActive,
      }
    );

  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink
            to={defaultLink}
            className={classes}
            end
          >
            {defaultText}
          </NavLink>
          {items.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={classes}
            >
              {item.text}
            </NavLink>
          ))}
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
