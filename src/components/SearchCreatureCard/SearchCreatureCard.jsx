import { useEffect, useState } from "react";
import { useThemeContext } from "../../context/theme_context";
import { API_URL_access_token } from "../../utils/constants";
import { SpinnerFire } from "../SpinnerFire/SpinnerFire";
import css from "./style.module.scss";

export const SearchCreatureCard = ({ creatureData }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [creatureMedia, setCreatureMedia] = useState(null);
	const creatureMediaID =
		creatureData?.results[0]?.data?.creature_displays[0].id || 30221;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://us.api.blizzard.com/data/wow/media/creature-display/${creatureMediaID}?namespace=static-us&locale=en_US${API_URL_access_token}`
				);
				const data = await response.json();

				if ((data.code = 404)) {
					setTimeout(() => {
						setLoading(false);
						setError("MEDIA_NOT_FOUND");
					}, 500);
				}

				if (data.assets.length !== 0) {
					setTimeout(() => {
						setLoading(false);
						setError(false);
						setCreatureMedia(data);
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
	}, [creatureData]);

	/////////////////////////////////////////////

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
			style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
		>
			{loading ? (
				<div className={css.spinner_container}>
					<SpinnerFire />
				</div>
			) : (
				""
			)}

			{(!loading && error === "NO_MEDIA_FOUND") ||
			(!loading && error === "WEB_DOWN") ? (
				<>
					<div className={css.img_wrapper}>
						<img
							className={css.img}
							alt="creature image"
							src={"interrogation-mark.png"}
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
								creatureData?.results[0]?.data?.is_tameable
									? css.true
									: css.false
							}`}
						>
							<span className={css.is_tameable}>
								{creatureData?.results[0]?.data?.is_tameable
									? "Can be tammed"
									: "Cannot be tammed"}
							</span>
						</div>
					</div>
				</>
			) : (
				""
			)}

			{!loading && !error ? (
				<>
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
								creatureData?.results[0]?.data?.is_tameable
									? css.true
									: css.false
							}`}
						>
							<span className={css.is_tameable}>
								{creatureData?.results[0]?.data?.is_tameable
									? "Can be tammed"
									: "Cannot be tammed"}
							</span>
						</div>
					</div>
				</>
			) : (
				""
			)}
		</div>
	);
};
