import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ApplicationView from "./views/ApplicationView";
import { Authorized } from "./views/Authorized";



function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <Authorized>
          <>
              <Header />
              <ApplicationView />   
          </>
        </Authorized>
      } />
    </Routes>

  );
}

export default App;
