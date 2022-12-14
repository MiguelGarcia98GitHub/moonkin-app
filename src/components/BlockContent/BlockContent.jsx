import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/theme_context";
import css from "./style.module.scss";

export const BlockContent = ({
	backgroundImage,
	icon,
	title,
	textAbove,
	textBelow,
	externalShadowColor,
	changeThemeTo
}) => {
	const [hover, setHover] = useState(false);

	const { themeHorde, themeAlliance } = useThemeContext();

	return (
		<Link to="/moonkin">
			<section
				style={
					hover
						? {
								background: `url(${backgroundImage})`,
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
								filter: `saturate(1.1) brightness(1.3) drop-shadow(0 0 2rem ${externalShadowColor})`,
								backgroundSize: "110% 110%"
						  }
						: {
								background: `url(${backgroundImage})`,
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
								backgroundSize: "100% 100%",
								filter: `saturate(0)`
						  }
				}
				className={css.block_background}
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
				onClick={() => {
					if (changeThemeTo === "horde") {
						themeHorde();
					}

					if (changeThemeTo === "alliance") {
						themeAlliance();
					}
				}}
			>
				<div className={css.block_content}>
					<div className={css.title_and_icon_container}>
						<div className={css.icon_container}>
							<img className={css.icon} src={icon} alt="choose theme image" />
						</div>
						<div className={css.title_container}>
							<span className={css.title}>{title}</span>
						</div>
					</div>
					<div className={css.text_container}>
						<div className={css.text}>
							{textAbove}
							<br />
							{textBelow}
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
};
