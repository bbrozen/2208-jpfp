import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleStudent = createAsyncThunk(
    "singleStudent",
    async (id) => {
      try {
        console.log(id)
        const { data } = await axios.get(`/api/students/${id}`);
        console.log(data)
        return data;
      } catch (err) {
        console.log(err);
      }
    }
);

const initialState = [];

const singleStudentSlice = createSlice({
    name: "singleStudent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
        // Add student to the state array
        return action.payload;
      });
    },
  }); 

export const selectSingleStudent = (state) => {
    return state.singleStudent;
  }; 

export default singleStudentSlice .reducer;