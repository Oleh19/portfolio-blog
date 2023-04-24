import { FC } from 'react';
import { Author } from '../../api/dto/getGlobalFeed';
import MyArticleCommit from '../UI/MyArticleCommit';

interface Props {
    body: string;
    author: Author
    publishedAt: string
}

const CommentItem: FC<Props> = ({body, author, publishedAt}) => {
  return (
    <div className="border rounded-md border-blog-lightGray ">
      <div className="p-5">
        <p>
         {body}
        </p>
      </div>
      <div className="border-t bg-gray-200 border-blog-lightGray py-3 px-5">
        <MyArticleCommit
          author={author}
          publishedAt={publishedAt}
        />
      </div>
    </div>
  );
};

export default CommentItem;
