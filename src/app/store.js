import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'
import cardsReducer from '../features/cards/cardsSlice'


export default configureStore({
  reducer: {
    //add topics to app's store
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
