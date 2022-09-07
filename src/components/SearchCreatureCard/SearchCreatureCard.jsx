import { useFetch } from "../../hooks/useFetch";
import css from "./style.module.scss";

export const SearchCreatureCard = () => {
	const {
		data: creatureData,
		setData,
		loading,
		error
	} = useFetch(
		`https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=&orderby=id&_page=1`
	);

	const { data: creatureMedia } = useFetch(
		"https://us.api.blizzard.com/data/wow/media/creature-display/30221?namespace=static-us&locale=en_US&access_token=USrbH4jbPT1ocEO8Mt4eRLtMPVJZqwbP6A"
	);

	if (creatureData && creatureMedia) {
		return (
			<div
				className={css.container}
				onClick={() => {
					console.log(creatureData.results[0]);
					console.log(creatureMedia);
				}}
			>
				<div className={css.img_wrapper}>
					<img src={creatureMedia.assets[0].value} alt="" />
				</div>
				<div className={css.name_wrapper}>
					<span className={css.name}>
						{creatureData.results[0].data.name.en_GB}
					</span>
				</div>
				<div className={css.type_wrapper}>
					<span className={css.type}>
						{creatureData.results[0].data.type.name.en_GB}
					</span>
				</div>
				<div className={css.is_tameable_wrapper}>
					<span className={css.is_tameable}>
						{creatureData.results[0].data.is_tameable
							? "Can be tammed"
							: "Cannot be tammed"}
					</span>
				</div>
			</div>
		);
	}
};
