import React from 'react';
import style from './carbrandStyle.module.scss'

export const CarBrand = ({handleSearchBrand, inputValue}) => {

    return(
        <>
        <div>
            <input type="text" placeholder='Enter the text' className={style.filter} onChange={handleSearchBrand} value={inputValue}/>
        </div>
        </>
    )
}