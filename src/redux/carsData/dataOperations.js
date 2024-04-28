import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


axios.defaults.baseURL = 'https://6606cf71be53febb857eac43.mockapi.io/';


export const fetchCars = createAsyncThunk(
    'cars/addFetchCars',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/cars?limit=12');
            // console.log(response.data);
            return response.data;
        }
        catch(err){
            return thunkApi.rejectWithValue(err.message);
        }
    }
);