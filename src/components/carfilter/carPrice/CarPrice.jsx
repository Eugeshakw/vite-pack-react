import React from "react";
import style from "./carpriceStyle.module.scss";

export const Carprice = ({onInputChange, inputValue}) => {



  return (
    <>
      <div>
        <input
          type="text"
          placeholder="to 40 $"
          className={style.filter}
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};
