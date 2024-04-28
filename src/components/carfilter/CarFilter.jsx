
import { ConFilter } from "./carFilter.styled.js";
import { CarBrand } from "./carBrand/Carbrand.jsx";
import { Carmileage } from "./carMileage/Carmileage";
import { Carprice } from "./carPrice/CarPrice";
import { ButtonFilter } from "./buttonSearch/ButtonSearch";
import { useData } from "../../hooks/useData.js";
import { useDispatch } from 'react-redux';
import {
  updateFilterBrand, 
  updateFilterMinMileage,
  updateFilterMaxMileage, 
  updateFilterPrice,
  updateButtonSearchFilter

} from '../../redux/carsData/createSlice';
export const CarFilter = () => {

const dispatch = useDispatch();

const {filterBrand, filterMaxMileage, filterMinMileage, filterPrice, isFilterChange, filteredCars, carData} = useData();



// console.log(filteredCars);






 
const handlePriceChange = (event) => {

  dispatch(updateFilterPrice(event.target.value))
};

const handleMaxMileageChange = (event) => {
dispatch(updateFilterMaxMileage(event.target.value))
}

const handleMinMileageChange = (event) => {
dispatch(updateFilterMinMileage(event.target.value))
}


const handleSearchBrand = (event) => {
  dispatch(updateFilterBrand(event.target.value));
};


const handleSubmitFilter = () => {
  const numericFilterPrice = filterPrice !== '' ? parseInt(filterPrice) : null;
  const numericMinMileage = filterMinMileage !== '' ? parseInt(filterMinMileage) : null;
  const numericMaxMileage = filterMaxMileage !== '' ? parseInt(filterMaxMileage) : null;

  const newFilterCars = carData.filter(car => {
    const numericRentalPrice = parseInt(car.rentalPrice.slice(1));
    const carMileage = parseInt(car.mileage);

    const matchesBrand = filterBrand !== '' ? car.make.toLowerCase().includes(filterBrand.toLowerCase()) : true;
    const matchesPrice = numericFilterPrice ? numericRentalPrice <= numericFilterPrice : true;
    const matchesMinMileage = numericMinMileage ? carMileage >= numericMinMileage : true;
    const matchesMaxMileage = numericMaxMileage ? carMileage <= numericMaxMileage : true;

    return matchesBrand && matchesPrice && matchesMinMileage && matchesMaxMileage;
  });
  
  dispatch(updateButtonSearchFilter(newFilterCars));
};




 

    

  return (
    <>
      <ConFilter>
        <CarBrand handleSearchBrand={handleSearchBrand} inputValue={filterBrand}/>
        <Carprice onInputChange={handlePriceChange} inputValue={filterPrice} />
        <Carmileage 
        handleMaxMileageChange={handleMaxMileageChange} 
        handleMinMileageChange={handleMinMileageChange} 
        maxValue={filterMaxMileage} 
        minValue={filterMinMileage}/>

        <ButtonFilter handleSubmitFilter={handleSubmitFilter}/>
      </ConFilter>
    </>
  );
};
