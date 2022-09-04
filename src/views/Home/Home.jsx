import { BlockContent } from "../../components/block-content/BlockContent/BlockContent";
import { ImageAndDescDisplay } from "../../components/block-content/ImageAndDescDisplay/ImageAndDescDisplay";
import { TitleAndTextBlock } from "../../components/block-content/TitleAndTextBlock/TitleAndTextBlock";
import { ImageWithNavbar } from "../../components/ImageWithNavbar/ImageWithNavbar";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";

import css from "./style.module.scss";

export default function Home() {
	// const [data, setData] = useState([]);
	// const [error, setError] = useState(false);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const getItems = async () => {
	// 		try {
	// 			const itemsUrl =
	// 				"https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=sword&orderby=id&_page=1";
	// 			const response = await axios.get(`${itemsUrl}${access_token}`);
	// 			setData(response);
	// 			setLoading(false);
	// 		} catch (err) {
	// 			setLoading(false);
	// 			setError(true);
	// 			console.log(err);
	// 		}
	// 	};

	// 	getItems();
	// }, []);

	return (
		<div className={css.container}>
			<ImageWithNavbar />

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
