import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const MyButtonFavorite: FC = () => {
  return (
    <button
      className="text-blog-blue border-blog-blue border text-center
      align-middle cursor-pointer select-none py-1 px-2 text-sm rounded-md
      flex items-center hover:text-white hover:bg-blog-blue transition-colors
      duration-300 focus:bg-blog-darkBlue focus:text-white "
    >
      <AiOutlineHeart />
      <span className="ml-1">70</span>
    </button>
  );
};

export default MyButtonFavorite;
