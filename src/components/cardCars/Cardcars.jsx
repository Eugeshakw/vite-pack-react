import { useData } from "../../hooks/useData";
import style from "./carCardsStyle.module.scss";
import { useDispatch } from "react-redux";
import {
  uppdateStateOpenModal,
  uppdateStateFavorites,
  removeStateFavorites
} from "../../redux/carsData/createSlice";
import { LikeSvg } from "./Like";

export const CarCards = () => {
  const { carData, isFilterChange, filteredCars, isfavorites } = useData();

  const dispatch = useDispatch();

  console.log(isfavorites);

  const handleClickFavorites = (id) => {
    const car = carData.find((car) => car.id === id);
    const isAlreadyFavorite = isfavorites.some((favCar) => favCar.id === id);
    if (car && !isAlreadyFavorite) {
      dispatch(uppdateStateFavorites(car));
    } else if (car && isAlreadyFavorite) {
      dispatch(removeStateFavorites(id));
    }
  };

  const handleOpenModal = (id) => {
    dispatch(uppdateStateOpenModal(id));
  };
  


  return (
    <>
      {!isFilterChange
        ? carData.map((cars, index) => (
            <div className={style.productCard} key={index}>
              <div className={style.conimg}>
                <button
                  type="button"
                  className={`${style.btnLike} ${isfavorites.some((favCar) => favCar.id === cars.id) ? style.btnLikeActive : ""}`}
                  onClick={() => handleClickFavorites(cars.id)}
                >
                  <LikeSvg />
                </button>
                <img
                  src={cars.img}
                  alt="Product"
                  className={style.productImage}
                />
              </div>
              <div className={style.productDetails}>
                <div className={style.detailsPriceTittle}>
                  <h2 className={style.productName}>{cars.make},</h2>
                  <p className={style.nameModule}>{cars.model},</p>
                  <p className={style.nameYear}>{cars.year}</p>
                  <p className={style.productPrice}>{cars.rentalPrice}</p>
                </div>
                <div className={style.discTags}>
                  <p>{cars.address ? cars.address.split(",")[1] : "und"}</p>
                  <p>{cars.address ? cars.address.split(",")[2] : "ond"}</p>
                  <p>{cars.rentalCompany}</p>
                  <p>{cars.model}</p>
                  <p>{cars.mileage}</p>
                  <p>{cars.functionalities[0]}</p>
                </div>
              </div>
              <button
                type="button"
                className={style.openModalButton}
                onClick={() => handleOpenModal(cars.id)}
              >
                Learn More
              </button>
            </div>
          ))
        : filteredCars.map((cars, index) => (
            <div className={style.productCard} key={index}>
              <div className={style.conimg}>
              <button
                  type="button"
                  className={`${style.btnLike} ${isfavorites.some((favCar) => favCar.id === cars.id) ? style.btnLikeActive : ""}`}
                  onClick={() => handleClickFavorites(cars.id)}
                >
                  <LikeSvg />
                </button>
                <img
                  src={cars.img}
                  alt="Product"
                  className={style.productImage}
                />
              </div>
              <div className={style.productDetails}>
                <div className={style.detailsPriceTittle}>
                  <h2 className={style.productName}>{cars.make},</h2>
                  <p className={style.nameModule}>{cars.model},</p>
                  <p className={style.nameYear}>{cars.year}</p>
                  <p className={style.productPrice}>{cars.rentalPrice}</p>
                </div>
                <div className={style.discTags}>
                  <p>{cars.address.split(",")[1]}</p>
                  <p>{cars.address.split(",")[2]}</p>
                  <p>{cars.rentalCompany}</p>
                  <p>{cars.model}</p>
                  <p>{cars.mileage}</p>
                  <p>{cars.functionalities[0]}</p>
                </div>
              </div>
              <button
                className={style.openModalButton}
                onClick={() => handleOpenModal(cars.id)}
              >
                Learn More
              </button>
            </div>
          ))}
    </>
  );
};
