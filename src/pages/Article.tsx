import { FC } from 'react';
import { useParams } from 'react-router';
import { useGetSingleArticleQuery } from '../api/repositoryFeed';
import ArticleMeta from '../components/articlePage/ArticleMeta';
import Banner from '../components/articlePage/Banner';
import CommentsList from '../components/articlePage/commentsList';
import Container from '../components/layouts/Container';
import TagList from '../components/UI/TagList';

const convertNewLines = (body: string) => {
  return body.split('\\n').join('');
};

const Article: FC = () => {
  const { slug } = useParams();
  const { data } = useGetSingleArticleQuery({ slug: slug! });

  if (!data) {
    return <h1>Article not found</h1>;
  }

  return (
    <>
      <Banner
        title={data.article.title}
        author={data.article.author}
        likes={data.article.favoritesCount}
        publishedAt={data.article.createdAt}
      />
      <Container>
        <div className="pb-8 border-b">
          <p
            className="text-xl mb-8 text-justify"
            dangerouslySetInnerHTML={{
              __html: convertNewLines(data.article.body),
            }}
          />
          <TagList list={data.article.tagList} />
        </div>
        <div className="flex justify-center mt-8">
          <ArticleMeta
            author={data.article.author}
            likes={data.article.favoritesCount}
            publishedAt={data.article.createdAt}
          />
        </div>
       <CommentsList  />
      </Container>
    </>
  );
};

export default Article;
