import { FC } from 'react';
import { Author } from '../../api/dto/getGlobalFeed';
import MyArticleAuthor from '../UI/MyArticleAuthor';
import MyButtonFavorite from '../UI/MyFavoriteButton';
import MyFollowButton from '../UI/MyFollowButton';

interface Props {
  author: Author;
  likes: number;
  publishedAt: string;
}

const ArticleMeta: FC<Props> = ({ author, likes, publishedAt }) => {
  return (
    <div className="flex">
      <div className="inline-block">
        <MyArticleAuthor
          author={author}
          createdAt={publishedAt}
        />
      </div>

      <div className="inline-flex mt-2">
        <MyFollowButton username={author.username} />
        <MyButtonFavorite count={likes} />
      </div>
    </div>
  );
};

export default ArticleMeta;
