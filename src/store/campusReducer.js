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

export const addCampusAsync = createAsyncThunk(
  "campuses/addCampus",
  async ({ name, address }) => {
    try{  
      const { data } = await axios.post(`/api/campuses`, {
        name,
        address
      });
      return data;
    } catch (error){
      console.error(error.response.data)
    }
  }
)

export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (id) => {
    const { data } = await axios.delete(`api/campuses/${id}`);
    return data;
  }
);

const campusesSlice = createSlice({
    name: "campuses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
        // Add campus to the state array
        return action.payload;
      });
      builder.addCase(addCampusAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
        const newState = state.filter((campus) => campus.id !== action.payload.id);
        return newState;
      });
    },
  }); 

  export const selectCampuses = (state) => {
    return state.campuses;
  }; 

export default campusesSlice.reducer;





