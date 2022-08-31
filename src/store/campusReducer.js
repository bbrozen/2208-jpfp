import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
    try {
      const { data } = await axios.get(`/api/campuses`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });

const campusesSlice = createSlice({
    name: "campuses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
        // Add campus to the state array
        return action.payload;
      });
    },
  }); 

  export const selectCampuses = (state) => {
    return state.campuses;
  }; 

export default campusesSlice.reducer;





