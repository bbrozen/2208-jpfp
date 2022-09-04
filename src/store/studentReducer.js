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

  export const addStudentAsync = createAsyncThunk(
    "campuses/addStudent",
    async ({ firstName, lastName, email }) => {
      try{  
  
        const { data } = await axios.post(`/api/students`, {
          firstName,
          lastName,
          email
        });
  
        return data;
      } catch (error){
        console.error(error.response.data)
      }
    }
  )

  export const deleteStudentAsync = createAsyncThunk(
    "students/deleteStudent",
    async (id) => {
      const { data } = await axios.delete(`api/students/${id}`);
      return data;
    }
  );  

  export const editStudentAsync = createAsyncThunk(
    "students/editStudents",
    async ({ id, firstName, lastName, email }) => {
      const { data } = await axios.put(`/api/students/${id}`, {
        firstName,
          lastName,
          email
      });
      return data;
    }
  );
  

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
        // Add student to the state array
        return action.payload;
      });
      builder.addCase(addStudentAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
        const newState = state.filter((student) => student.id !== action.payload.id);
        return newState;
      });
      builder.addCase(editStudentAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  }); 

  export const selectStudents = (state) => {
    return state.students;
  }; 

export default studentsSlice.reducer;
