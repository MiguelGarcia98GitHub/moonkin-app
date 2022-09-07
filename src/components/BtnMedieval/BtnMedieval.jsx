import css from "./style.module.scss";

export const BtnMedieval = ({ text }) => {
	return <button className={css.btn}>{text}</button>;
};
