import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/theme_reducer";

const initialState = {
	currentTheme: "legion",
	backgroundColor: "backgroundColor: rgba(126, 211, 33, 0.5)",
	boxShadow: "boxShadow: 0 8px 32px 0 rgba(30, 150, 30, 0.5)",
	icon: "legion-icon.jpg"
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const themeLegion = () => {
		dispatch({ type: "THEME_LEGION" });
	};

	const themeHorde = () => {
		dispatch({ type: "THEME_HORDE" });
	};

	const themeAlliance = () => {
		dispatch({ type: "THEME_ALLIANCE" });
	};

	return (
		<ThemeContext.Provider
			value={{ ...state, themeLegion, themeHorde, themeAlliance }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(ThemeContext);
};
