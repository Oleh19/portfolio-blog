import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { GetProfileInDto } from './dto/getProfile';

interface ProfileParams {
  username: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileInDto, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
