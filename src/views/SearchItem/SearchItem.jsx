import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SpecificItem } from "../../components/SpecificItem/SpecificItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";
import css from "./style.module.scss";

export const SearchItem = () => {
	const [inputTextValue, setInputTextValue] = useState("");
	const debounce = useDebounce();

	function handleInput(e) {
		const text = e.target.value;
		debounce(() => setInputTextValue(text));
	}

	const { data, setData, loading, error } = useFetch(
		`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1`
	);

	// const callBackFunc = useCallback(
	// 	e => {
	// 		setInputTextValue(e.target.value);
	// 	},
	// 	[data]
	// );

	const tempListItems = [];
	const listItems = data?.results?.map(item => {
		if (tempListItems.length === 200) {
			tempListItems.push(item);
		}

		return <SpecificItem itemData={item} key={uuidv4()} />;
	});

	if (listItems) {
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
							// onChange={handleInput}
							onChange={handleInput}
						/>
					</div>
				</div>
				<div className={css.list_container}>{data && listItems}</div>
				<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
			</div>
		);
	}
};
