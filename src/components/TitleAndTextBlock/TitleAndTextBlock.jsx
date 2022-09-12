import css from "./style.module.scss";

export const TitleAndTextBlock = () => {
	return (
		<div className={css.container}>
			<div className={css.title}>
				Game Data App: Compare and Find Different Items and Creatures
			</div>
			<div className={css.text}>
				<p>
					Have you been looking for a web application that you can use both on
					phone and desktop, and that allows you to find updated in-game data so
					that you can find that next armor piece for your favourite armor set
					or maybe something different like an amazing fire sword or a magic
					thunder staff? Then you are on the right place. Here you can search
					through the entire collection of items on the game, as well as find
					information about any type of creature that is currently in the game.{" "}
					<br />
					<br />
				</p>
				<p>
					<strong>
						This application has 3 themes: the green theme is the initial one
						(neutral) and will remain on the home view until you choose to
						decide between the 2 sides of the game: Horde (Orcs) and Alliance
						(Humans). ¡Launch the App and choose your side by clicking on any of
						the 2 images below!
					</strong>
				</p>
				<p>
					<br />
					<br />
					<strong>
						Also, if at some point you later want to change the theme, you can
						doing so by clicking on the footer, but it will only allow you to
						choose between Horde and Alliance. ¡No such thing as neutrality
						anymore in a war, choose wisely!
					</strong>
				</p>
			</div>
		</div>
	);
};
