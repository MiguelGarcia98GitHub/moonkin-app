import { useFetch } from "../../hooks/useFetch";
import css from "./style.module.scss";

export const SpecificItem = ({ itemData }) => {
	const itemID = itemData.data.media.id;
	console.log(itemID);

	// https://us.api.blizzard.com/data/wow/media/item/32236?namespace=static-9.2.7_44981-us&access_token=UShQ9aF3fqOdwOsTkzc5juvDFu3vxUIfex
	const { data, setData, loading, error } = useFetch(
		`https://us.api.blizzard.com/data/wow/media/item/${itemID}?namespace=static-9.2.7_44981-us`,
		"&access_token=UShQ9aF3fqOdwOsTkzc5juvDFu3vxUIfex"
	);
	console.log(data);

	return (
		<div
			className={css.container}
			onClick={() => {
				console.log(data);
			}}
		>
			<div>{data && <img src={data.assets[0].value}></img>}</div>
			<div>{itemData.data.name.en_GB}</div>
		</div>
	);
};
