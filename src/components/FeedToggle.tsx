import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const FeedToggle: FC = () => {
  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className="bg-none border-b-2 border-blog-blue py-[0.6rem] px-4"
          >
            Global
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
