import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        ADD_POST: (state, action) => {
            return state.concat([action.payload.data]);
        },
        DELETE_POST: (state, action) => state.filter((post) => post.id !== action.payload.id),
        EDIT_POST: (state, action) => state.map((post) => post.id === action.payload.id ? { ...post, editing: !post.editing } : post),
        RET_POST_LIST: (state, action) => state.concat(action.payload.data),
        UPDATE_POST: (state, action) => {
            const existingPost = state.find(post => post.id === action.payload.id);
            existingPost.author = action.payload.data.author;
            existingPost.title = action.payload.data.title;
            existingPost.message = action.payload.data.message;
            existingPost.editing = !existingPost.editing;
        },
    }
})

export const { ADD_POST, DELETE_POST, EDIT_POST, RET_POST_LIST, UPDATE_POST } = postSlice.actions

export default postSlice.reducer