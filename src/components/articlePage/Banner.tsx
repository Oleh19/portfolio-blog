import { FC } from 'react';
import { Author } from '../../api/dto/getGlobalFeed';
import ArticleMeta from './ArticleMeta';

interface Props {
  title: string | undefined;
  author: Author;
  likes: number;
  publishedAt: string
}

const Banner: FC<Props> = ({ title, author, likes, publishedAt }) => {
  return (
    <div className="pt-8 pb-4 px-5 mb-5 bg-black text-justify ">
      <p className="text-white font-semibold text-4xl text-justify  mb-8 ">{title}</p>
      <ArticleMeta
        author={author}
        likes={likes}
        publishedAt={publishedAt}
      />
    </div>
  );
};

export default Banner;
