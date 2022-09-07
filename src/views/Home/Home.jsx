import { BlockContent } from "../../components/BlockContent/BlockContent";
import { ImageAndDescDisplay } from "../../components/ImageAndDescDisplay/ImageAndDescDisplay";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import { TitleAndTextBlock } from "../../components/TitleAndTextBlock/TitleAndTextBlock";

import css from "./style.module.scss";

export default function Home() {
	return (
		<div className={css.container}>
			{/* <ImageWithNavbar /> */}

			<TitleAndTextBlock />
			<div className={css.block_content_grid_container}>
				<BlockContent
					backgroundImage={"horde.jpg"}
					icon={"horde.jpg"}
					title={"CHOOSE THE HORDE"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet. Ultricies lacus sed turpis tincidunt id."
					}
					externalShadowColor={"rgb(179, 2, 0)"}
				/>
				<BlockContent
					backgroundImage={"alliance.jpg"}
					icon={"alliance.jpg"}
					title={"CHOOSE THE ALLIANCE"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet. Ultricies lacus sed turpis tincidunt id."
					}
					externalShadowColor={"rgb(0, 62, 212)"}
				/>
			</div>

			<div className={css.image_and_desc_display_container}>
				<ImageAndDescDisplay
					img={"game-1.jpg"}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas."
					}
				/>
				<ImageAndDescDisplay
					img={"game-2.jpg"}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas."
					}
				/>
				<ImageAndDescDisplay
					img={"game-3.jpg"}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas."
					}
				/>
				<ImageAndDescDisplay
					img={"game-4.jpg"}
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas."
					}
				/>
			</div>
			{/* <div
				onClick={() => {
					console.log(data);
				}}
			>
				Click text here to console log the data
			</div>
			<div>
				{loading && "Loading..."} {error && "Error!!!"}
			</div>
			<BtnMedieval text="Enter Moonkin" />
			<NavLinkLightUp text="Some Link Goes Here" />
			<BtnLeftArrow />
			<BtnRightArrow />
			<FooterGreenBackground /> */}
			<ThemeFooter icon={"icon-1.png"} backgroundColor={"green"} />
		</div>
	);
}
