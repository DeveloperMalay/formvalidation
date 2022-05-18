import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barchart from "./Barchart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/barchart"
          element={
            <Barchart
              xdim={750}
              ydim={500}
              margin={{
                top: 80,
                bottom: 80,
                left: 120,
                right: 120,
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
