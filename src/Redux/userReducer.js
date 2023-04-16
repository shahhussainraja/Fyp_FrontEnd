//here is All action related to user
// for help https://react-redux.js.org/tutorials/quick-start 

import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name : "userDetail",
    initialState : {
        id : null,
        name:null,
        email:null,
        image:null,
        userType:null,
        loggedIn : false 
    
    }
,
reducers : {
    updateUserDetail : (state, action ) =>{
        state.id = action.payload.id
        state.name = action.payload.name
        state.email = action.payload.email
        state.image = action.payload.image
        state.userType = action.payload.userType
        state.loggedIn = action.payload.loggedIn
    }

}


})

// Action creators are generated for each case reducer function
export const { updateUserDetail } = userSlice.actions;

export default userSlice.reducer