import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/theme_context";
import "./index.scss";
import Home from "./views/Home/Home";
import { Menu } from "./views/Menu/Moonkin";
import { SearchCreature } from "./views/SearchCreature/SearchCreature";
import { SearchItem } from "./views/SearchItem/SearchItem";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/moonkin" element={<Menu />} />
					<Route exact path="/search-item" element={<SearchItem />} />
					<Route exact path="/search-creature" element={<SearchCreature />} />
					<Route exact path="/search-mount" element={<div>/s mount</div>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
