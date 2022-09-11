import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SpecificItem } from "../../components/SpecificItem/SpecificItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { useThemeContext } from "../../context/theme_context";
import { useDebounce } from "../../hooks/useDebounce";
import css from "./style.module.scss";

export const SearchItem = () => {
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

	useEffect(() => {
		let active = true;
		load();
		return () => {
			active = false;
		};

		async function load() {
			const res = await (
				await fetch(
					`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=${inputTextValue}&orderby=id&_page=1&access_token=USwkXbCTpKoIUU00X97SY06KrUxbFJp1RP`
				)
			).json();
			if (!active) {
				return;
			}
			setData(res);
		}
	}, [inputTextValue]);

	const handleInput = useCallback(
		async e => {
			console.log("input is: ", e.target.value);
			const debounced = debounce(() => setInputTextValue(e.target.value));
			return e => {
				console.log("what is e???", e);
				const {
					target: { value }
				} = e;
				debounced(value);
			};
		},
		[debounce]
	);

	const listItems = useMemo(() => {
		console.log("what is data?", data);
		return data?.results?.map(item => {
			return <SpecificItem itemData={item} key={uuidv4()} />;
		});
	}, [data]);

	if (listItems) {
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
						onChange={handleInput}
					/>
				</div>
				<div className={css.list_container}>{data && listItems}</div>
				<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
			</div>
		);
	}
};
