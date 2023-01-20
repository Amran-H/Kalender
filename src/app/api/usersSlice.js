import apiSlice from "./apiSlice";



export const usersSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return responseData.data;
            }
        }),
        postUser: builder.mutation({
            query: initialPost => ({
                url: `/users`,
                method: "post",
                body: initialPost
            })
        })
    })
});


export const {
    useGetUsersQuery,
    usePostUserMutation
} = usersSlice;