import { GlobalFeedIn } from './dto/getGlobalFeed';

export const transformResponse = (response: GlobalFeedIn) => {
  return {
    articles: response.articles || [],
    articlesCount: response.articlesCount || 0,
  };
};
