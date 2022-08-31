import {createStore, applyMiddleware, combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


import studentsSlice from "./studentReducer";
import campusesSlice from "./campusReducer"
import singleCampusSlice from "./singleCampusSlice";
import singleStudentSlice from "./singleStudentSlice";

const store = configureStore(
    {
        reducer: {
            students: studentsSlice,
            campuses: campusesSlice,
            singleCampus: singleCampusSlice,
            singleStudent: singleStudentSlice
        }
    }
)

export default store;

