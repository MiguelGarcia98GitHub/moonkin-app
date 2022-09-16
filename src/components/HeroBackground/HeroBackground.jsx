import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const HeroBackground = () => {
	const { boxShadow, currentTheme, themeLegion, themeHorde, themeAlliance } =
		useThemeContext();

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
			<div className={css.main_container}>
				<div className={css.main_title_container}>
					<h1 className={css.title}>GAME DATA APP</h1>
				</div>
				<div className={css.main_text_container}>
					<h3 className={css.title}>
						Find lots of data about items, creatures, screenshots and more from
						the WoW universe
					</h3>
				</div>
			</div>
		</div>
	);
};
