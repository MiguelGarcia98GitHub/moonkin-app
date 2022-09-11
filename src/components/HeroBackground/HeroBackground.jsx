import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const HeroBackground = ({ children }) => {
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
		<div className={css.container} style={{ boxShadow: boxShadow }}>
			<img className={css.img} src="block-background-1.jpg" alt="" />
			{children}
			<div className={css.main_container}>
				<div className={css.main_title_container}>
					<h1 className={css.title}>MOONKIN APP</h1>
				</div>
				<div className={css.main_text_container}>
					<h3 className={css.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						fugiat quod placeat laboriosam sunt provident officia!
					</h3>
				</div>
			</div>
		</div>
	);
};
