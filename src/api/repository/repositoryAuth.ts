import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { SignInInDTO } from '../dto/SignInIn';
import { SignInOutDTO } from '../dto/SignInOut';
import { SignUpInDTO } from '../dto/SignUpIn';
import { SignUpOutDTO } from '../dto/SignUpOut';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    signUp: builder.query<SignUpInDTO, SignUpOutDTO['user']>({
      query: (args) => ({
        url: '/users',
        method: 'post',
        data: {
          user: args,
        },
      }),
    }),

    signIn: builder.query<SignInInDTO, SignInOutDTO['user']>({
      query: (args) => ({
        url: '/users/login',
        method: 'post',
        data: {
          user: args,
        },
      }),
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery } = authApi;
