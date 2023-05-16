//here is All action related to user
// for help https://react-redux.js.org/tutorials/quick-start 

import { createSlice } from '@reduxjs/toolkit'


export const filterSilce = createSlice({
    name : "Filter",
    initialState : {
        selectedCategory:null 
    
    }
,
reducers : {
    updateFilter : (state, action ) =>{
        state.selectedCategory = action.payload.selectedCategory
    }

}


})

// Action creators are generated for each case reducer function
export const { updateFilter } = filterSilce.actions;
export default filterSilce.reducer