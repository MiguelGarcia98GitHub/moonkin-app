import { Link } from "react-router-dom";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { ThemeFooter } from "../../components/ThemeFooter/ThemeFooter";
import css from "./style.module.scss";

export const Menu = () => {
	return (
		<div className={css.container}>
			<div className={css.wrapper}>
				<Link to="/search-item">
					<MenuItem backgroundColor={"rebeccapurple"} text={"Search Item"} />
				</Link>
				<Link to="/search-creature">
					<MenuItem
						backgroundColor={"rebeccapurple"}
						text={"Search Creature"}
					/>
				</Link>
				<Link to="/search-mount">
					<MenuItem backgroundColor={"rebeccapurple"} text={"Search Mount"} />
				</Link>
			</div>
			<ThemeFooter backgroundColor={"green"} icon={"icon-1.png"} />
		</div>
	);
};
