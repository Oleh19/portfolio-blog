import { FC } from 'react';
import { Link } from 'react-router-dom';
import MyButtonFavorite from './UI/MyButtonFavorite';
import TagList from './UI/TagList';

const Article: FC = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center">
          <Link
            to="/name"
            className="bg-none"
          >
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="inline-block h-8 w-8 rounded-full "
            />
          </Link>
          <div className="mr-6 ml-1 leading-4 inline-flex flex-col">
            <Link
              to="/name"
              className="font-medium max-w-min pb-1 "
            >
              Oleh
            </Link>
            <span className="text-blog-lightGray text-base">
              19 June, 2000 year{' '}
            </span>
          </div>
          <MyButtonFavorite />
        </div>
        <Link
          to="/article/1"
          className="bg-none"
        >
          <h1 className="mb-1 font-semibold text-2xl">Title</h1>
          <p className="text-blog-lightGray font-light mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            obcaecati similique a optio quod culpa nemo, soluta nulla nostrum
            nobis repellat dolorum veritatis possimus modi voluptatem maiores
            suscipit officia ipsam!
          </p>
        </Link>
        <div className="flex justify-between">
          <span className="text-blog-gray text-sm font-light">
            Read more...
          </span>
          <TagList />
        </div>
      </div>
    </article>
  );
};

export default Article;
