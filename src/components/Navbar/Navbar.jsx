import css from "./style.module.scss";

export const Navbar = () => {
	return (
		<div className={css.container}>
			<div className={css.navbar_left}>
				<h3>LOGO</h3>
			</div>
			<div className={css.navbar_right}>
				<h3>ABOUT</h3>
			</div>
		</div>
	);
};
