import css from "./style.module.scss";

export const SpinnerTwoLights = () => {
	return (
		<div className={css.spinner}>
			<div className={css.loader}>
				<div className={css.face}>
					<div className={css.circle}></div>
				</div>
				<div className={css.face}>
					<div className={css.circle}></div>
				</div>
			</div>
		</div>
	);
};
