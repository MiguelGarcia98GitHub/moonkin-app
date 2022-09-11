import { useEffect, useState } from "react";
import { SearchCreatureCard } from "../../components/SearchCreatureCard/SearchCreatureCard";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useThemeContext } from "../../context/theme_context";
import { useDebounce } from "../../hooks/useDebounce";
import css from "./style.module.scss";

export const SearchCreature = () => {
	const [inputTextValue, setInputTextValue] = useState("");
	const [data, setData] = useState();
	const debounce = useDebounce();

	const {
		backgroundColor,
		boxShadow,
		currentTheme,
		themeLegion,
		themeHorde,
		themeAlliance
	} = useThemeContext();

	console.log(backgroundColor);
	console.log(boxShadow);

	useEffect(() => {
		let active = true;
		load();
		return () => {
			active = false;
		};

		async function load() {
			const res = await (
				await fetch(
					`https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1&access_token=USwkXbCTpKoIUU00X97SY06KrUxbFJp1RP`
				)
			).json();
			if (!active) {
				return;
			}

			setData(res);
		}
	}, [inputTextValue]);

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
		<div className={css.container}>
			<div
				className={css.text_input_wrapper}
				style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
			>
				<input
					className={css.text_input}
					type="text"
					placeholder="Search Creature..."
					onChange={e => {
						setInputTextValue(e.target.value);
					}}
				/>
			</div>
			<SearchCreatureCard creatureData={data} />
			<ThemeFooter icon={"icon-1.png"} backgroundColor={"green"} />
		</div>
	);
};
