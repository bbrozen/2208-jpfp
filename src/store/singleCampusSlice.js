import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editCampusAsync } from "./campusReducer";
import { unregisterStudentAsync } from "./campusReducer";


export const fetchSingleCampus = createAsyncThunk(
    "singleCampus",
    async (id) => {
      try {
        const { data } = await axios.get(`/api/campuses/${id}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    }
);

const initialState = [];

const singleCampusSlice = createSlice({
    name: "singleCampus",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
        // Add campus to the state array
        return action.payload;
      });
      builder.addCase(editCampusAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(unregisterStudentAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  }); 

export const selectSingleCampus = (state) => {
    return state.singleCampus;
  }; 

export default singleCampusSlice.reducer;
