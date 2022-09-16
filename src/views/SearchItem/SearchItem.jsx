import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SpecificItem } from "../../components/SpecificItem/SpecificItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useThemeContext } from "../../context/theme_context";
import { useDebounce } from "../../hooks/useDebounce";
import { API_URL_access_token } from "../../utils/constants";
import css from "./style.module.scss";

export const SearchItem = () => {
	const [inputTextValue, setInputTextValue] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState();
	const debounce = useDebounce();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1${API_URL_access_token}`
				);
				const data = await response.json();

				if (data.results.length === 0) {
					setTimeout(() => {
						setLoading(false);
						setError("NO_RESULTS");
					}, 500);
				}

				if (data.results.length > 0) {
					setTimeout(() => {
						setLoading(false);
						setError(false);
						setData(data);
					}, 500);
				}
			} catch (e) {
				setTimeout(() => {
					setLoading(false);
					setError("WEB_DOWN");
				}, 500);
			}
		};

		fetchData();
	}, [inputTextValue]);

	////////////////////////////////

	const {
		backgroundColor,
		boxShadow,
		currentTheme,
		themeLegion,
		themeHorde,
		themeAlliance
	} = useThemeContext();

	useEffect(() => {
		if (currentTheme === "legion") {
			themeLegion();
		}

		if (currentTheme === "horde") {
			themeHorde();
		}

		if (currentTheme === "alliance") {
			themeAlliance();
		}
	}, []);

	const listItems = data?.results?.map(item => {
		return <SpecificItem itemData={item} key={uuidv4()} />;
	});

	return (
		<div className={css.container}>
			<div
				className={css.text_input_wrapper}
				style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
			>
				<input
					className={css.text_input}
					type="text"
					placeholder="Search Item..."
					onChange={e => {
						debounce(setInputTextValue(e.target.value));
					}}
				/>
			</div>
			<div className={css.list_container}>
				{loading ? <div>LOADING...</div> : ""}
				{!loading && error === "NO_RESULTS" ? <div>NO RESULTS FOUND</div> : ""}
				{!loading && error === "WEB_DOWN" ? <div>WEB DOWN!</div> : ""}
				{!loading && !error ? listItems : ""}
			</div>
			<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
		</div>
	);
};
