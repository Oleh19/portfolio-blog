import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCommentsArticleQuery } from '../../api/repositoryFeed';
import CommentItem from './CommentItem';
interface Props {}

const CommentsList: FC<Props> = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCommentsArticleQuery({ slug: slug! });

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (!data?.comments) {
    return (
      <div className="max-w-3xl mx-auto mt-7 flex flex-col gap-4">
        <p>
          <Link to="/sign-in">Sign in</Link> or{' '}
          <Link to="/sign-up">Sign up</Link>
        </p>
        <p>No comments</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-7 flex flex-col gap-4">
      <p>
        <Link to="/sign-in">Sign in</Link> or <Link to="/sign-up">Sign up</Link>
      </p>
      {data.comments.map((comment) => (
        <CommentItem
          key={`comment-${comment.id}`}
          body={comment.body}
          author={comment.author}
          publishedAt={comment.createdAt}
        />
      ))}
    </div>
  );
};

export default CommentsList;
