const theme_reducer = (state, action) => {
	if (action.type === "THEME_LEGION") {
		return {
			...state,
			currentTheme: "legion",
			backgroundColor: "rgba(126, 211, 33, 0.5)",
			boxShadow: "0 8px 32px 0 rgba(80, 240, 50, 0.5)",
			currentIcon: "icon-1.png"
		};
	}

	if (action.type === "THEME_HORDE") {
		return {
			...state,
			currentTheme: "horde",
			backgroundColor: "rgba(150, 0, 0, 0.5)",
			boxShadow: "0 8px 32px 0 rgba(250, 0, 20, 0.5)",
			currentIcon: "horde.jpg"
		};
	}

	if (action.type === "THEME_ALLIANCE") {
		return {
			...state,
			currentTheme: "alliance",
			backgroundColor: "rgba(5, 46, 93, 0.5)",
			boxShadow: "0 8px 32px 0 rgba(0, 0, 170, 0.5)",
			currentIcon: "alliance.jpg"
		};
	}
};

export default theme_reducer;
