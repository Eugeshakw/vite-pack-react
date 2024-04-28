import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";



import { HomePage } from "./page/Home";

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
      
    </>
  );
};

export default App;
