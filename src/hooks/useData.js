import { useSelector } from "react-redux"

import {cardSelector, 
    carsSelector, 
    filterMaxMiliageSelect, 
    filterMinMiliageSelect, 
    filterPriceSelect, 
    filterBrandSelect,
    isFilterChangeSelect,
    filteredCarsSelect,
    isOpenModalSelect,
    idCarSelector,
    stateFavoritesSelect
} from '../redux/carsData/selector'

export const useData = () => {
    const carData = useSelector(carsSelector);
    const cards = useSelector(cardSelector);

    const filterBrand = useSelector(filterBrandSelect);
    const filterMaxMileage = useSelector(filterMaxMiliageSelect);
    const filterMinMileage = useSelector(filterMinMiliageSelect);
    const filterPrice = useSelector(filterPriceSelect);
    const isFilterChange = useSelector(isFilterChangeSelect);
    const filteredCars = useSelector(filteredCarsSelect);
    const isOpenModal = useSelector(isOpenModalSelect);
    const isIdCar = useSelector(idCarSelector);
    const isfavorites = useSelector(stateFavoritesSelect);
    


    

    return {
        carData, 
        cards, 
        filterBrand, 
        filterMaxMileage, 
        filterMinMileage, 
        filterPrice, 
        isFilterChange, 
        filteredCars, 
        isOpenModal, 
        isIdCar,
        isfavorites}
}
