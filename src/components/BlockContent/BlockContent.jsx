import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";

export const BlockContent = ({
	backgroundImage,
	icon,
	title,
	text,
	externalShadowColor
}) => {
	const [hover, setHover] = useState(false);
	return (
		<Link to="/moonkin">
			<div
				style={
					hover
						? {
								background: `url(${backgroundImage})`,
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
								filter: `saturate(1.1) brightness(1.3) drop-shadow(0 0 2rem ${externalShadowColor})`,
								// hue-rotate(0.25turn)
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
			>
				<div className={css.block_content}>
					<div className={css.title_and_icon_container}>
						<div className={css.icon_container}>
							<img className={css.icon} src={icon} alt="" />
						</div>
						<div className={css.title_container}>
							<span className={css.title}>{title}</span>
						</div>
					</div>
					<div className={css.text_container}>
						<div className={css.text}>{text}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
