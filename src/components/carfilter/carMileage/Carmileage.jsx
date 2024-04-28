import style from "./carmileageStyle.module.scss";

export const Carmileage = ({handleMaxMileageChange, handleMinMileageChange, maxValue, minValue}) => {
  return (
    <>
      <div className={style.carFilterContainer}>
        <input
          type="text"
          className={style.carFilterInput}
          placeholder="From"
          onChange={handleMinMileageChange}
          value={minValue}
        />
        <input
          type="text"
          className={style.carFilterInput}
          placeholder="To"
          value={maxValue}
          onChange={handleMaxMileageChange}
          
        />
      </div>
    </>
  );
};
