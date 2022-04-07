import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Layout from "../containers/Layout";
import Tienda from "../pages/Tienda";
import NotFound from '../pages/NotFound'
import Blog from "../pages/Blog/Blog";
import Home from '../pages/Home'
import MyOrder from "../containers/MyOrder";


const Router = () => {
  const initialState = useInitialState();
  return (

    <AppContext.Provider value={initialState}>
			<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/tienda" element={<Tienda/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/order" element={<MyOrder/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
			</BrowserRouter>
		</AppContext.Provider>

  );
};

export default Router;
