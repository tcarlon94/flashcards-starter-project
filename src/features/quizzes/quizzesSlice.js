import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    //name quizzes
    name: 'quizzes',
    //initial state quizzes empty object
    initialState: {
        quizzes: {}
    },
    reducers: {
        //addQuiz action
        addQuiz: (state, action) => {
        const newQuiz = {
            [action.payload.id]: {
                ...action.payload
            }
        };
        state.quizzes = {
            ...state.quizzes,
            ...newQuiz
        } 
        }
    }
});

//thunk action creator
export const addQuizForTopicId = (payload) => {
    return (dispatch) => {
        //dispatches two actions
        dispatch(addQuiz(payload)); //creates new quiz
        dispatch(
            addQuizId({
                topicId: payload.topicId,
                quizId: payload.id
            }) //associates quiz with topic
        )
    }
}

//selector that selects quizzes
export const selectQuizzes = state => state.quizzes.quizzes;

//exporting action creator
export const { addQuiz } = quizzesSlice.actions;

//reducer
export default quizzesSlice.reducer;