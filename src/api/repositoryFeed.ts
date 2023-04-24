import { createApi } from '@reduxjs/toolkit/query/react';
import { PAGE_SIZE } from '../consts';
import { baseQuery } from './baseQuery';
import { ArticleCommentsInDto } from './dto/articlesComments';
import { FeedArticle } from './dto/getGlobalFeed';
import { SingleArticleInDto } from './dto/getSingleArticle';
import { PopularTags } from './dto/PopularTags';
import { transformResponse } from './utils';

interface BaseFeedParams {
  page: number;
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
}

interface ProfileFeedParams extends BaseFeedParams {
  autor: string;
  isFavorite?: boolean;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

interface SingleArticleParams {
  slug: string;
}

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery,
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
      transformResponse,
    }),

    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      query: ({ page, autor, isFavorite = false }) => ({
        url: '/articles',
        params: {
          limit: PAGE_SIZE,
          offset: page * PAGE_SIZE,
          author: isFavorite ? undefined : autor,
          favorited: !isFavorite ? undefined : autor,
        },
      }),
      transformResponse,
    }),

    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      }),
    }),

    getSingleArticle: builder.query<SingleArticleInDto, SingleArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),

    getCommentsArticle: builder.query<
      ArticleCommentsInDto,
      SingleArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
      }),
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsArticleQuery,
} = fetchApi;
