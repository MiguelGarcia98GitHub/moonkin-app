import { Link } from "react-router-dom";
import { MoonkinItem } from "../../components/MoonkinItem/MoonkinItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import css from "./style.module.scss";

export const Moonkin = () => {
	return (
		<div className={css.container}>
			<div className={css.wrapper}>
				<Link to="/search-item">
					<MoonkinItem backgroundColor={"rebeccapurple"} text={"Search Item"} />
				</Link>
				<Link to="/search-creature">
					<MoonkinItem
						backgroundColor={"rebeccapurple"}
						text={"Search Creature"}
					/>
				</Link>
				<Link to="/search-mount">
					<MoonkinItem
						backgroundColor={"rebeccapurple"}
						text={"Search Mount"}
					/>
				</Link>
			</div>
			<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
		</div>
	);
};
