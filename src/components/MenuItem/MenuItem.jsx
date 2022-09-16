import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const MenuItem = ({ text }) => {
	const {
		backgroundColor,
		boxShadow,
		currentTheme,
		themeLegion,
		themeHorde,
		themeAlliance
	} = useThemeContext();

	useEffect(() => {
		if (currentTheme === "legion") {
			themeLegion();
		}

		if (currentTheme === "horde") {
			themeHorde();
		}

		if (currentTheme === "alliance") {
			themeAlliance();
		}
	}, []);

	return (
		<button
			className={css.container}
			style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
		>
			<h2 className={css.text}>{text}</h2>
		</button>
	);
};
