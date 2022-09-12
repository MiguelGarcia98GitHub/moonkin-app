import { useEffect } from "react";
import { useThemeContext } from "../../context/theme_context";
import { useFetch } from "../../hooks/useFetch";
import { SpinnerFire } from "../SpinnerFire/SpinnerFire";
import css from "./style.module.scss";

export const SearchCreatureCard = ({ creatureData }) => {
	const creatureMediaID =
		creatureData?.results[0]?.data?.creature_displays[0].id || 30221;

	const { data: creatureMedia, loading } = useFetch(
		`https://us.api.blizzard.com/data/wow/media/creature-display/${creatureMediaID}?namespace=static-us&locale=en_US` // 30221 test itemID
	);

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

	if (loading) {
		return (
			<div
				className={css.container}
				style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
				onClick={() => {
					console.log(creatureData);
					console.log(itemID);
					console.log(creatureMedia);
				}}
			>
				<div className={css.spinner_container}>
					<SpinnerFire />
				</div>
			</div>
		);
	}

	if (creatureData && creatureMedia && !loading) {
		return (
			<div
				className={css.container}
				style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
				onClick={() => {
					console.log(creatureData);
					console.log(itemID);
					console.log(creatureMedia);
				}}
			>
				<div className={css.img_wrapper}>
					<img
						className={css.img}
						alt="creature image"
						src={creatureMedia?.assets[0]?.value}
						style={{ boxShadow: boxShadow }}
					/>
				</div>
				<div className={css.info_wrapper}>
					<div className={css.name_wrapper}>
						<span className={css.name}>
							{creatureData?.results[0]?.data?.name?.en_GB}
						</span>
					</div>
					<div className={css.type_wrapper}>
						<span className={css.type}>
							{creatureData?.results[0]?.data?.type?.name?.en_GB}
						</span>
					</div>
					<div
						className={`${css.is_tameable_wrapper} ${
							creatureData.results[0].data.is_tameable ? css.true : css.false
						}`}
					>
						<span className={css.is_tameable}>
							{creatureData.results[0].data.is_tameable
								? "Can be tammed"
								: "Cannot be tammed"}
						</span>
					</div>
				</div>
			</div>
		);
	}
};
