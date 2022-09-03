import css from "./style.module.scss";

export const MoonkinItem = ({ text, backgroundColor }) => {
	return (
		<button
			style={{ backgroundColor: backgroundColor }}
			className={css.container}
		>
			<h2 className={css.text}>{text}</h2>
		</button>
	);
};
