import { createApi } from '@reduxjs/toolkit/query/react';
import { PAGE_SIZE } from '../consts';
import { axiosBaseQuery } from '../core/axiosBaseQuery';
import { FeedArticle, GlobalFeedIn } from './dto/getGlobalFeed';
import { PopularTags } from './dto/PopularTags';

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        params: {
          limit: PAGE_SIZE,
          offset: page * PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: (response: GlobalFeedIn) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = fetchApi;
