import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

enum TagListStyle {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

interface Props {
  list: string[];
  itemStyle?: keyof typeof TagListStyle;
  itemAs?: 'li' | 'a';
}

const TagList: FC<Props> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = 'li',
}) => {
  const itemClasses = clsx(
    'text-sm border mr-1 mb-1 px-3 rounded-xl font-light',
    {
      'border-blog-blue': itemStyle === TagListStyle.LIGHT,
      'bg-blog-blue text-white border-white hover:bg-blog-darkBlue':
        itemStyle === TagListStyle.DARK,
      'hover: text-white bg-none':
        itemStyle === TagListStyle.DARK && itemAs === 'a',
    }
  );

  return (
    <ul className="flex flex-wrap ">
      {list.map((tag) =>
        itemAs === 'li' ? (
          <li
            className={itemClasses}
            key={tag}
          >
            {tag}
          </li>
        ) : (
          <Link
            to={`/?tag=${tag}`}
            className={itemClasses}
            key={tag}
          >
            {tag}
          </Link>
        )
      )}
    </ul>
  );
};

export default TagList;
