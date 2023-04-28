import { GlobalFeedInDTO } from './dto/getGlobalFeed';

export const transformResponse = (response: GlobalFeedInDTO) => {
  return {
    articles: response.articles || [],
    articlesCount: response.articlesCount || 0,
  };
};
