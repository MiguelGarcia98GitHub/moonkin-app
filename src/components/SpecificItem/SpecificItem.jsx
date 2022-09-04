import css from "./style.module.scss";

export const SpecificItem = ({ itemData }) => {
	return (
		<div
			className={css.container}
			onClick={() => {
				console.log(itemData);
			}}
		>
			<div>{itemData.data.name.en_GB}</div>
			<div></div>
		</div>
	);
};
