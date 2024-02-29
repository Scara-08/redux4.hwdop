import { createSlice } from "@reduxjs/toolkit" 
import fetchAllUsers from "../creators/UsersCreators";

const initialState = {
    users: [],
    isLoadingUsers: false,
    isErrorUsers: '',
};

const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
            state.isLoadingUsers = false;
        },
        setUsersError: (state, action) => {
            state.isErrorUsers = action.payload;
            state.isLoadingUsers = false;
        },
        setIsLoading: (state) => {
            state.isErrorUsers = "some";
            state.isLoadingUsers = true;
            state.users = [];
        },
    },

    extraReducers: (builder) => {
        // builder.addCase(fetchAllUsers.pending, (state) => {
        //     state.isErrorUsers = '',
        //     state.isLoading = true,
        //     state.users = [];
        // });
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoadingUsers = false;
        });
        
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isErrorUsers = action.payload;
            state.isLoadingUsers = false;
        });
    },
});

const usersReducer = usersSlice.reducer;

export const { setIsLoading, setUsers, setUsersError } = usersSlice.actions;
export default usersReducer;