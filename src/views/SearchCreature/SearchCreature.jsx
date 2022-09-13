import { useEffect, useState } from "react";
import { SearchCreatureCard } from "../../components/SearchCreatureCard/SearchCreatureCard";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useThemeContext } from "../../context/theme_context";
import { useDebounce } from "../../hooks/useDebounce";
import css from "./style.module.scss";

export const SearchCreature = () => {
	const [inputTextValue, setInputTextValue] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState();
	const debounce = useDebounce();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1&access_token=USHC6eLcJyZvrVnvN5LH7sYAtifVPBenhx`
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

	///////////////////////////////////////////////////////

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

	return (
		<div
			className={css.container}
			onClick={() => {
				console.log(data);
			}}
		>
			<div
				className={css.text_input_wrapper}
				style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
			>
				<input
					className={css.text_input}
					type="text"
					placeholder="Search Creature..."
					onChange={e => {
						debounce(setInputTextValue(e.target.value));
					}}
				/>
			</div>

			{loading ? <div>LOADING!!</div> : ""}
			{!loading && error === "NO_RESULTS" ? <div>NO RESULTS FOUND!</div> : ""}
			{!loading && error === "WEB_DOWN" ? <div>WEB DOWN!</div> : ""}
			{!loading && !error ? <SearchCreatureCard creatureData={data} /> : ""}
			<ThemeFooter icon={"icon-1.png"} backgroundColor={"green"} />
		</div>
	);
};
