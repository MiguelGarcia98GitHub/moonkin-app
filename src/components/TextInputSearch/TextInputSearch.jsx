import css from "./style.module.scss";

export const TextInputSearch = () => {
	return (
		<div className={css.container}>
			<div className={css.wrapper}>
				<h2>Search Item</h2>
				<input className={css.text_input} type="text" />
			</div>
		</div>
	);
};
