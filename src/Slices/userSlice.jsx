import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./asyncFunc.jsx/fetchUsers";

const userSlice = createSlice({
    name : 'users',
    initialState : {users : [],state:'',errors:''},
    extraReducers : (builder)=>
    builder
    .addCase(fetchUsers.fulfilled,(state,action)=>{
        state.users = action.payload;
        state.errors = 'fulfilled';
    })
    .addCase(fetchUsers.rejected,(state,action)=>{
        state.errors = 'rejected';
    })
    .addCase(fetchUsers.pending,(state,action)=>{
        state.errors = 'pending || loading';
    })
    
})

export default userSlice.reducer;