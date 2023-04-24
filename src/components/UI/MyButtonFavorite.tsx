import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

interface Props {
  count: number;
}

const MyButtonFavorite: FC<Props> = ({ count }) => {
  return (
    <button
      className="text-blog-blue border-blog-blue border text-center
      align-middle cursor-pointer select-none py-1 px-2 mx-2 text-sm rounded-md
      flex items-center hover:text-white hover:bg-blog-blue transition-colors
      duration-300 focus:bg-blog-darkBlue focus:text-white"
    >
      <AiOutlineHeart />
      <span className="ml-1">{count}</span>
    </button>
  );
};

export default MyButtonFavorite;
