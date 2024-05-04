import {createSlice} from '@reduxjs/toolkit'


const favoriteSlice = createSlice ({
    name : 'favorites',
    initialState : {
       ids: []
    },
    reducers : {
      addFavourite : (state, action) => 
      {
         state.ids.push(action.payload.id)
         //actions are objects created by redux and any info we get in payload
      },
      removeFavourite : (state, action) =>
      {
          state.ids.splice(state.ids.indexOf(action.payload.id), 1)
          // splice is used to remove we need to pass 2 args
          // first is the indexof item to remove and 
          //second id how many items to remove
      }
    }
})
export const addFavourite = favoriteSlice.actions.addFavourite
export const removeFavourite = favoriteSlice.actions.removeFavourite
export default favoriteSlice.reducer;