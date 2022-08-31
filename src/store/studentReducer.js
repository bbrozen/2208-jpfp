import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
    try {
      const { data } = await axios.get(`/api/students`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
        // Add student to the state array
        return action.payload;
      });
    },
  }); 

  export const selectStudents = (state) => {
    return state.students;
  }; 

export default studentsSlice.reducer;
