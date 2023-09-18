import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";

function App() {
  return(
       <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route index element={<SearchMovies/>}/>
        </Route>
       </Routes>
  )
}


export default App;

// Начать с паттерна API и с компонента поиска фильмов
// Компонент списка фильмов