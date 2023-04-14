import { createApi } from '@reduxjs/toolkit/query/react';
import { PAGE_SIZE } from '../consts';
import { axiosBaseQuery } from '../core/axiosBaseQuery';
import { GlobalFeedIn } from './dto/getGlobalFeed';
import { PopularTags } from './dto/PopularTags';

interface GlobalFeedParams {
  page: number;
}

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page }) => ({
        url: '/articles',
        params: {
          limit: PAGE_SIZE,
          offset: page * PAGE_SIZE,
        },
      }),
    }),
    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = fetchApi;
