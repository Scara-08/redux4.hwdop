import { createSlice } from "@reduxjs/toolkit" 
import fetchAllPosts from "../creators/PostsCreators";

const initialState = {
    posts: [],
    isLoadingPosts: false,
    isErrorPosts: '',
};

const postsSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
            state.isLoadingPosts = false;
        },
        setPostsError: (state, action) => {
            state.isErrorPosts = action.payload;
            state.isLoadingPosts = false;
        },
        setIsLoading: (state) => {
            state.isErrorPosts = "some";
            state.isLoading = true;
            state.posts = [];
        },
    },

    extraReducers: (builder) => {
        // builder.addCase(fetchAllUsers.pending, (state) => {
        //     state.isErrorUsers = '',
        //     state.isLoadingUsers = true,
        //     state.users = [];
        // });
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoadingPosts = false;
        });
        
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.isErrorPosts = action.payload;
            state.isLoadingPosts = false;
        });
    },
});

const postsReducer = postsSlice.reducer;

export const { setIsLoading, setPosts, setPostsError } = postsSlice.actions;
export default postsReducer;
