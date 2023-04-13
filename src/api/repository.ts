import { createApi } from '@reduxjs/toolkit/query/react';
import { PAGE_SIZE } from '../consts';
import { axiosBaseQuery } from '../core/axiosBaseQuery';
import { GlobalFeedIn } from './dto/getGlobalFeed';

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
      query: ({page}) => ({
        url: '/articles',
        method: 'get',
        params: {
          limit: PAGE_SIZE,
          offset: page * PAGE_SIZE
        }
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = fetchApi;
