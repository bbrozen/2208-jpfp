import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editStudentAsync } from "./studentReducer"


export const fetchSingleStudent = createAsyncThunk(
    "singleStudent/fetch",
    async (id) => {
      try {
        const { data } = await axios.get(`/api/students/${id}`);
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
      builder.addCase(editStudentAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  }); 

export const selectSingleStudent = (state) => {
    return state.singleStudent;
  }; 

export default singleStudentSlice.reducer;