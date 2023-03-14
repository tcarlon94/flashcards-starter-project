import { createSlice } from "@reduxjs/toolkit"

export const cardsSlice = createSlice({
    //named cards
    name: 'cards',
    //initial state consisting of cards empty object
    initialState: {
        cards: {}
    },
    reducers: {
        //addCard action
        addCard: (state, action) => {
            const newCard = {
                [action.payload.id]: {
                    ...action.payload
                }
            };
            state.cards = {
                ...state.cards,
                ...newCard
            }
        }
    }
})

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;