import { ComponentProps } from 'react';
import { FC } from 'react';

interface Props {
  title: string;
  disabled: ComponentProps<'button'>['disabled'];
  type?: ComponentProps<'button'>['type'];
}

const MyButton: FC<Props> = ({ title, ...Props }) => {
  return (
    <button
      className="bg-none bg-blog-blue/20 text-black hover:text-white text-center
    border-2 border-blog-blue align-middle cursor-pointer select-none py-2 px-5
    text-sm rounded-md hover:bg-blog-blue active:bg-blog-darkBlue
    duration-500 transition-all ease-out hover:border-blog-gray
    active:border-black"
      {...Props}
    >
      {title}
    </button>
  );
};

export default MyButton;
