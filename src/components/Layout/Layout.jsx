import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {CarFilter} from '../carfilter/CarFilter';
import { Header } from "../Header/Header";

export const Layout = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      {/* <CarFilter /> */}
      <Outlet />
    </Suspense>
  );
};
