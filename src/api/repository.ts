import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../core/axiosBaseQuery';
import { GlobalFeedIn } from './dto/getGlobalFeed';

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, any>({
      query: () => ({
        url: '/articles',
        method: 'get',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = fetchApi;
