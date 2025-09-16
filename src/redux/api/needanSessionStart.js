import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.131:8000';

export const needanSessionStart = createApi({
    reducerPath: 'needanSessionStart',
    baseQuery: fetchBaseQuery({
        baseUrl: URL_PREFIX,
    }),
    endpoints: (builder) => ({
        createSecurityData: builder.mutation({
            query: (data) => ({
                url: '/api/chat',
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        chatStart: builder.mutation({
            query: (data) => ({
                url: '/api/chat',
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useCreateSecurityDataMutation,
     useChatStartMutation }
      = needanSessionStart;
