import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";
import { useEffect } from "react";

export const ThemeFooter = ({ icon }) => {
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

	const handleThemeChange = () => {
		if (currentTheme === "legion") {
			themeHorde();
		}

		if (currentTheme === "horde") {
			themeAlliance();
		}

		if (currentTheme === "alliance") {
			themeHorde();
		}
	};

	return (
		<div
			className={css.container}
			style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
		>
			<div
				className={css.icon_container}
				onClick={() => {
					handleThemeChange();
				}}
			>
				<img className={css.icon} src={icon} alt="" />
			</div>
		</div>
	);
};
