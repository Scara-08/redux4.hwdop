import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const fetchAllPosts = createAsyncThunk('posts/fetchAll', async (payload, thunkApi) => {
    try {
        const response = await api.getPosts();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('No bro')
    }
})

export default fetchAllPosts;