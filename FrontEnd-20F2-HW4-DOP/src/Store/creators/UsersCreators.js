import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const fetchAllUsers = createAsyncThunk('users/fetchAll', async (payload, thunkApi) => {
    try {
        const response = await api.getUsers();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('No bro')
    }
})

export default fetchAllUsers;