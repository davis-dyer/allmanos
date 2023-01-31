import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import { AnimatePresence } from "framer-motion";



function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <div className="">
          <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
              <Route path="/*" element={<HomeContainer />} />
            </Routes>
          </main>
        </div>
      </div>

    </AnimatePresence>
  );
}

export default App;
