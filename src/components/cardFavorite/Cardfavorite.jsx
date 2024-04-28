import style from "./favoritesStyle.module.scss";
import { useData } from "../../hooks/useData";
import { LikeSvg } from "../cardCars/Like";
import { removeStateFavorites } from "../../redux/carsData/createSlice";
import { useDispatch } from "react-redux";

export const CardFavorite = () => {
  const { isfavorites } = useData();
    const dispatch = useDispatch()
  const handleClickFavorites = (id) => {
    const car = isfavorites.find((car) => car.id === id);

    if (car) {
      dispatch(removeStateFavorites(id));
    }
  };

  return (
    <>
      {isfavorites.map((cars, index) => (
        <div className={style.productCard} key={index}>
          <div className={style.conimg}>
            <button
              type="button"
              className={`${style.btnLike} ${
                isfavorites.some((favCar) => favCar.id === cars.id)
                  ? style.btnLikeActive
                  : ""
              }`}
              onClick={() => handleClickFavorites(cars.id)}
            >
              <LikeSvg />
            </button>
            <img src={cars.img} alt="Product" className={style.productImage} />
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
      ))}
    </>
  );
};
