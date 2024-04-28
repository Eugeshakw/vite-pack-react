import style from './buttonStyle.module.scss'
export const ButtonFilter = ({handleSubmitFilter}) => {




 return (
    <>
    <button type="button" className={style.btnFilter} onClick={handleSubmitFilter}>Search</button>
    </>
 )
};