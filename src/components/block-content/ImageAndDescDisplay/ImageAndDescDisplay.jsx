import css from "./style.module.scss";

export const ImageAndDescDisplay = ({ img, text }) => {
	return (
		<div className={css.container}>
			<div className={css.img_wrapper}>
				<img className={css.img} src={img} alt="game-image" />
			</div>
			<div className={css.text_wrapper}>
				<div className={css.text}>{text}</div>
			</div>
		</div>
	);
};
