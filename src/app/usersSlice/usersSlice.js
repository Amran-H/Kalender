import { apiSlice } from "../apiSlice/apiSlice";


const initialState = [];

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addUser: builder.mutation({
            query: (user) => ({
                url: `/users?email=${user.email}`,
                method: "POST",
                body: user
            }),
            invalidatesTags: ['Users']
        }),
    })
})


export const { useAddUserMutation } = usersSlice;