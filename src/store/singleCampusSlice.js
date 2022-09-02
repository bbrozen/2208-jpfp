import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleCampus = createAsyncThunk(
    "singleCampus",
    async (id) => {
      try {
       
        const { data } = await axios.get(`/api/campuses/${id}`);
        console.log(data)
        return data;
      } catch (err) {
        console.log(err);
      }
    }
);

// export const fetchCampusStudents = createAsyncThunk(
//     "singleCampusStudents",
//     async (id) => {
//       try {
//         const { data } = await axios.get(`/api/campuses/${id}`);
//         return data.students;
//       } catch (err) {
//         console.log(err);
//       }
//     }
// );

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
    },
  }); 

export const selectSingleCampus = (state) => {
    return state.singleCampus;
  }; 

export default singleCampusSlice.reducer;
