import css from "./style.module.scss";

export const ThemeFooter = ({ icon, backgroundColor }) => {
	return (
		<div style={{ backgroundColor: backgroundColor }} className={css.container}>
			<div className={css.icon_container}>
				<img className={css.icon} src={icon} alt="" />
			</div>
		</div>
	);
};
