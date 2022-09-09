import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const ImageAndDescDisplay = ({ img, text }) => {
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
		<div
			className={css.container}
			style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
		>
			<div className={css.img_wrapper}>
				<img className={css.img} src={img} alt="game-image" />
			</div>
			<div className={css.text_wrapper}>
				<div className={css.text}>{text}</div>
			</div>
		</div>
	);
};
