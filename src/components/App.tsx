import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Promo from "./Pages/Promo";
import Final from "./Pages/Final";

function App() {
  const [startValue, setStartValue] = useState<number>(0);

  const changeStartValue = (value: number) => {
    setStartValue(value);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home startValue={startValue} changeStartValue={changeStartValue} />
          }
        />

        <Route path="/promo" element={<Promo />} />

        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  );
}

export default App;
