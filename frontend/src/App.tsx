import React, { type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Detail from "./pages/detail";
import Header from "./components/header";
import Error from "./components/error";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/create" element={<Form />} />
        <Route path="/place/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
