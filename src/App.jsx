import "./App.css";
import { useDispatch } from "react-redux";
import { fetchCars } from "./redux/carsData/dataOperations";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Catalog } from "./page/Catalog";
import { Favorites } from "./page/Favorites";
import { UIModal } from './components/uikit/modal/Modal';
import { useData } from './hooks/useData';
import { HomePage } from "./page/Home";

const App = () => {
  const {isOpenModal} = useData();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
      {isOpenModal ? <UIModal /> : null}
    </>
  );
};

export default App;
