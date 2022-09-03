import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Home from "./views/Home/Home";
import { Moonkin } from "./views/Moonkin/Moonkin";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/moonkin" element={<Moonkin />} />
				<Route exact path="/search-item" element={<div>/s item</div>} />
				<Route exact path="/search-creature" element={<div>/s creature</div>} />
				<Route exact path="/search-mount" element={<div>/s mount</div>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
