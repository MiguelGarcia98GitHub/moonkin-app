import css from "./style.module.scss";

export const NavLinkLightUp = ({ text }) => {
	return (
		<div className={css.wrapper}>
			<div className={css.link_container}>
				<a href="#">{text}</a>
			</div>
		</div>
	);
};
