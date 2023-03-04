import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS'

const initialState = {
    commentsArray: COMMENTS
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState
})

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteID = (campsiteId) => (state) => {
    return state.comments.commentArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId));
}