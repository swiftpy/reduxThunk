import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk('fetchUsers/async',async()=>{
    const res = axios.get('https://jsonplaceholder.typicode.com/users');
    return (await res).data
});

export {fetchUsers};