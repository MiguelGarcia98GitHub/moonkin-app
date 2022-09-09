import { useFetch } from "../../hooks/useFetch";
import { SpinnerFire } from "../SpinnerFire/SpinnerFire";
import css from "./style.module.scss";

export const SearchCreatureCard = ({ creatureData }) => {
	const itemID =
		creatureData?.results[0]?.data?.creature_displays[0].id || 30221;

	const { data: creatureMedia, loading } = useFetch(
		`https://us.api.blizzard.com/data/wow/media/creature-display/${itemID}?namespace=static-us&locale=en_US`
	);

	//https://us.api.blizzard.com/data/wow/media/creature-display/30221?namespace=static-us&locale=en_US&access_token=USXfEF0r8EuvQqyYnInRgPTnTSb35HHl22

	if (loading) {
		return (
			<div
				className={css.container}
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
				onClick={() => {
					console.log(creatureData);
					console.log(itemID);
					console.log(creatureMedia);
				}}
			>
				<div className={css.img_wrapper}>
					<img
						className={css.img}
						alt=""
						src={creatureMedia?.assets[0]?.value}
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
