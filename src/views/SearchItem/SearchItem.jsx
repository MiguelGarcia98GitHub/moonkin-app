import { useState } from "react";
import { SpecificItem } from "../../components/SpecificItem/SpecificItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useFetch } from "../../hooks/useFetch";
import css from "./style.module.scss";

export const SearchItem = () => {
	const [inputTextValue, setInputTextValue] = useState("");

	const { data, setData, loading, error } = useFetch(
		`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1`,
		"&access_token=UShQ9aF3fqOdwOsTkzc5juvDFu3vxUIfex"
	);

	const listItems = data?.results?.map(item => {
		return <SpecificItem itemData={item} />;
	});

	return (
		<div className={css.container}>
			<div
				className={css.text_input_box_wrapper}
				onClick={() => {
					console.log(data.results);
				}}
			>
				<div className={css.text_input_wrapper}>
					<input
						className={css.text_input}
						type="text"
						placeholder="Search Item..."
						onChange={e => {
							setInputTextValue(e.target.value);
						}}
					/>
				</div>
			</div>
			{data && listItems}
			<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
		</div>
	);
};
