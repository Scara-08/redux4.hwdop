import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    initialState,
    name: "Counter",
    reducers: {
        setIncrement: (state) => {
            state.count += 1;
        },
        setDecrement: (state) => {
            state.count -= 1;
        },
        setCount: (state, action) => {
            state.count += action.payload
        }
    },
});

const counterReducer = counterSlice.reducer;

export const { setDecrement, setIncrement, setCount } = counterSlice.actions;
export default counterReducer;