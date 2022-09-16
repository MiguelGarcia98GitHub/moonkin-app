import { BlockContent } from "../../components/BlockContent/BlockContent";
import { HeroBackground } from "../../components/HeroBackground/HeroBackground";
import { ImageAndDescDisplay } from "../../components/ImageAndDescDisplay/ImageAndDescDisplay";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { TitleAndTextBlock } from "../../components/TitleAndTextBlock/TitleAndTextBlock";

import css from "./style.module.scss";

export default function Home() {
	return (
		<div className={css.container}>
			<HeroBackground />
			<TitleAndTextBlock />
			<div className={css.block_content_grid_container}>
				<BlockContent
					backgroundImage={"horde.jpg"}
					icon={"horde.jpg"}
					title={"CHOOSE THE HORDE"}
					textAbove={"Click on the image below to use the Horde theme!"}
					textBelow={"Show your support to the orcs side!!"}
					externalShadowColor={"rgb(179, 2, 0)"}
					changeThemeTo={"horde"}
				/>
				<BlockContent
					backgroundImage={"alliance.jpg"}
					icon={"alliance.jpg"}
					title={"CHOOSE THE ALLIANCE"}
					textAbove={"Click on the image below to use the Alliance theme!"}
					textBelow={"Show your support to the humans side!!"}
					externalShadowColor={"rgb(0, 62, 212)"}
					changeThemeTo={"alliance"}
				/>
			</div>

			<div className={css.image_and_desc_display_container}>
				<ImageAndDescDisplay
					img={"game-1.jpg"}
					text={
						"Be careful if you visit this place, there is a lot of lava around and some trolls who might not be all too friendly."
					}
					title={"Fortress on the iron mines:"}
				/>
				<ImageAndDescDisplay
					img={"game-2.jpg"}
					text={
						"This tower was built to watch against hostile enemies in times of conflict."
					}
					title={"Watchtower on the snow lands:"}
				/>
				<ImageAndDescDisplay
					img={"game-3.jpg"}
					text={
						"Probably built by elves. The house looks great, but the cost of the rent might be costlier than your average rent on Madrid."
					}
					title={"House on the forest:"}
				/>
				<ImageAndDescDisplay
					img={"game-4.jpg"}
					text={
						"Very romantic looking place. Just be careful to not get bitten by a wild wolf, there are a lot on winter, could be dangerous!"
					}
					title={"The Moon Valley:"}
				/>
			</div>
			<ThemeFooter />
		</div>
	);
}
