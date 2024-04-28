import { createSlice } from "@reduxjs/toolkit";

import { fetchCars } from './dataOperations'








export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        isLoading: false,
        error: null,
        cardCars: 12,
        isFilterChange: false,
        isOpenModal: false,
        filterCars: [],
        favorites: [],
        idCar: null,


        filter: {
            brand: '',
            price: '',
            maxmileage: '',
            minmileage: ''       
        },
    },
   

    reducers: {
        updateFilterBrand: (state, {payload}) => {
            state.filter.brand = payload  
        },
        updateFilterPrice: (state, {payload}) => {
            state.filter.price = payload
        },
        updateFilterMaxMileage: (state, {payload}) => {
            state.filter.maxmileage = payload
        },
        updateFilterMinMileage: (state, {payload}) => {
            state.filter.minmileage = payload
        },
        updateButtonSearchFilter: (state, {payload}) => { 
            state.isFilterChange = true;
            state.filterCars = payload;
        },
        updateButtonChangeFilter: (state) => {
            state.isFilterChange = false;
        },
        uppdateStateOpenModal: (state, {payload}) => {
            state.isOpenModal = true;
            state.idCar = payload

        },
        uppdateStateCloseModal: (state) => {
            state.isOpenModal = false;
        },
        uppdateStateFavorites: (state, {payload}) => {
            state.favorites.push(payload);
            
        },
        removeStateFavorites: (state, {payload}) => {
            state.favorites = state.favorites.filter((favCar) => favCar.id !== payload);
        }
        
        





    },

    extraReducers: builder => {
        builder
        .addCase(fetchCars.fulfilled, (state, action)=>{
            state.cars = action.payload 
        })
    }


})

export const dataCarReducer = carSlice.reducer


export const { 
    updateFilterBrand, 
    updateFilterMinMileage,
    updateFilterMaxMileage, 
    updateFilterPrice,
    updateButtonChangeFilter,
    updateButtonSearchFilter,
    uppdateStateOpenModal,
    uppdateStateCloseModal,
    uppdateStateFavorites,
    removeStateFavorites
     
} = carSlice.actions

