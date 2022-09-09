import css from "./style.module.scss";

export const ImageWithNavbar = () => {
	return (
		<div className={css.container}>
			{/* <video className={css.video} autoPlay muted loop id="liveBg">
				<source src="illidan-live-bg.mp4" type="video/mp4" />
			</video> */}
			<img className={css.img} src="block-background-1.jpg" alt="" />
			<div className={css.navbar_left}>
				<h3>LOGO</h3>
			</div>
			<div className={css.navbar_right}>
				<h3>ABOUT</h3>
			</div>
			<div className={css.main_container}>
				<div className={css.main_title_container}>
					<h1>MOONKIN APP</h1>
				</div>
				<div className={css.main_text_container}>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						fugiat quod placeat laboriosam sunt provident officia!
					</h3>
				</div>
			</div>
		</div>
	);
};
