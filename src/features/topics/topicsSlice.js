import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
    //topic named topics
    name: 'topics',
    //initial state consisting of topics empty object
    initialState: {
        topics: {}
    },
    reducers: {
        //addTopic action
        addTopic: (state, action) => {
            //payload for the action
            const {id, name, icon} = action.payload
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
            },
            //add quizIds action to topics slice
            addQuizId: (state, action) => {
                const {topicId, quizId} = action.payload;
                if (state.topics[topicId]) {
                    state.topics[topicId].quizIds.push(quizId);
                }
            }
        },

    }
)
//selector that selects topics
export const selectTopics = state => state.topics.topics;

//exporting action creators
export const { addTopic, addQuizId } = topicsSlice.actions;

//reducer
export default topicsSlice.reducer;
