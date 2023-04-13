import { FC } from 'react';

interface Props {
  list: string[];
}

const TagList: FC<Props> = ({ list }) => {
  return (
    <ul className="flex ">
      {list.map((tag) => (
        <li
          className="text-sm font-light border
          border-blog-blue mr-1 mb-1 px-3 rounded-xl"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
