import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const ThemeFooter = () => {
	const {
		backgroundColor,
		boxShadow,
		currentIcon,
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
		<footer
			className={css.container}
			style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
		>
			<div
				className={css.icon_container}
				onClick={() => {
					handleThemeChange();
				}}
			>
				<img
					className={css.icon}
					src={currentIcon}
					alt="theme icon"
					style={{ boxShadow: boxShadow }}
				/>
			</div>
		</footer>
	);
};
