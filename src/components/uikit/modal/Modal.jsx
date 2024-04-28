import { createPortal } from "react-dom";
import style from "./modalStyle.module.scss";
import CloseIcon from './CloseIcon';
import { uppdateStateCloseModal } from "../../../redux/carsData/createSlice";
import { useDispatch } from "react-redux";
import { useData } from "./../../../hooks/useData";
import { useCallback} from "react";


export const UIModal = () => {
  const { isIdCar, carData, filteredCars } = useData();

  const dispatch = useDispatch();

  const closeBackDrop = () => {
    dispatch(uppdateStateCloseModal());
  };

const handleClickModal = useCallback( (event) => {
        event.stopPropagation()
        
},[])

  const carsToSearch = filteredCars.length > 0 ? filteredCars : carData;
  const car = carsToSearch.find((car) => car.id === isIdCar);
  const functionelites = car.functionalities;
  console.log(functionelites);
  const accessories = car.accessories;
  console.log(accessories);
  const funcAndAcces = [].concat(accessories, functionelites);
  funcAndAcces.map((func) => console.log(func));
  const rentalCond = car.rentalConditions.split("\n");
  console.log(rentalCond);


  const modal = (
    <div className={style.modal} onClick={closeBackDrop}>
      <div className={style.modalContent} onClick={handleClickModal}>
        <button type="button" className={style.btnCloseIcon} onClick={closeBackDrop}><CloseIcon/></button>
        <div className={style.blockImg}>
          <img src={car.img} alt="" className={style.carImg}/>
        </div>
        <div className={style.tittleDisc}>
          <h2 className={style.productName}>{car.make}</h2>
          <p className={style.nameModule}>{car.model},</p>
          <p className={style.nameYear}>{car.year}</p>
        </div>
        <div className={style.discTags}>
          <p>{car.address.split(",")[1]}</p>
          <p>{car.address.split(",")[2]}</p>
          <p>id:{car.id}</p>
          <p>Year: {car.year}</p>
          <p>Type: {car.type}</p>
          <p>Fuel Consumption: {car.fuelConsumption}</p>
          <p>Engine Size:{car.engineSize}</p>
        </div>
        <p className={style.discriptionCar}>{car.description}</p>
        <h2 className={style.tittlefunc}>Accessories and functionalities:</h2>
        <div className={style.conFunctionalities}>
          {funcAndAcces.map((func) => (
            <p className={style.functionalitesTxt}>{func}</p>
          ))}
        </div>
        <h2 className={style.rentalTitte}>Rental Conditions: </h2>
        <div className={style.blockRent}>
          <p className={style.rentalCond}>
            {rentalCond[0].split(":")[0] + ": "}
            <span className={style.numberRent}>
              {rentalCond[0].split(":")[1].trim()}
            </span>
          </p>
          <p className={style.rentalCond}>{rentalCond[1]}</p>
          <p className={style.rentalCond}>{rentalCond[2]}</p>
          <p className={style.rentalCond}>
            Meleage: <span className={style.numberRent}>{car.mileage}</span>
          </p>
          <p className={style.rentalCond}>
            Price: <span className={style.numberRent}>{car.rentalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modal-root"));
};
