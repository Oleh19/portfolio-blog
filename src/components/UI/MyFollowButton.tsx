import { FC } from 'react';
import { BiPlus } from 'react-icons/bi';

const MyFollowButton: FC = () => {
  return (
    <button
      className="text-center align-middle cursor-pointer
                 select-none border py-1 px-2 text-sm rounded-md flex
                 items-center border-blog-gray text-blog-gray
                hover:text-black hover:border-black hover:bg-white/50
                focus:text-black focus:border-black focus:bg-white/50
                active:bg-white/30 duration-300 ease-out"
    >
      <BiPlus />
      Follow Full Name
    </button>
  );
};

export default MyFollowButton;
