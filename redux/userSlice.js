import { createSlice } from "@reduxjs/toolkit";

const initialState={
   email:" ",
   firstName:" ",
   image:" ",
   lastName:" ",
   _id:" ",
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            console.log(action.payload.data)
            //state.user=action.payload.data
            state._id=action.payload.data._id
            state.firstName=action.payload.firstName
            state.lastName=action.payload.lastName
            state.email=action.payload.email
            state.image=action.payload.image
        },
    },
})
export const {loginRedux}=userSlice.actions

export default userSlice.reducer