import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import css from "./style.module.scss";

export const SpecificItem = ({ itemData }) => {
	const [backgroundCol, setBackgroundCol] = useState("");
	const itemID = itemData.data.media.id;
	const purchasePrice = itemData.data.purchase_price;
	let purchasePriceRender = "";
	let tempNewPrice = purchasePrice;
	let cooperCost = 0;
	let silverCost = 0;
	let goldCost = 0;
	if (tempNewPrice > 0 && tempNewPrice < 100) {
		cooperCost = tempNewPrice;
	}

	if (tempNewPrice > 100 && tempNewPrice < 10000) {
		for (let i = 0; i < tempNewPrice; i++) {
			if (tempNewPrice >= 100) {
				tempNewPrice = tempNewPrice - 100;
				silverCost++;
			}
			if (tempNewPrice < 100) {
				tempNewPrice = tempNewPrice - 1;
				cooperCost++;
			}
		}
	}

	if (tempNewPrice >= 10000) {
		for (let i = 0; i < tempNewPrice; i++) {
			if (tempNewPrice >= 10000) {
				tempNewPrice = tempNewPrice - 10000;
				goldCost++;
			}
			if (tempNewPrice < 10000) {
				tempNewPrice = tempNewPrice - 100;
				silverCost++;
			}

			if (tempNewPrice < 100) {
				tempNewPrice = tempNewPrice - 1;
				cooperCost++;
			}
		}
	}

	// https://us.api.blizzard.com/data/wow/media/item/32236?namespace=static-9.2.7_44981-us&access_token=
	const { data, setData, setLoading, loading, error } = useFetch(
		`https://us.api.blizzard.com/data/wow/media/item/${itemID}?namespace=static-9.2.7_44981-us`
	);
	// console.log(data);

	useEffect(() => {
		if (itemData) {
			if (itemData.data.quality.type === "POOR") {
				setBackgroundCol("rgba(157,157,157, 1)");
			} else if (itemData.data.quality.type === "COMMON") {
				setBackgroundCol("rgba(255, 255, 255, 1)");
			} else if (itemData.data.quality.type === "UNCOMMON") {
				setBackgroundCol("rgba(30, 255, 0, 1)");
			} else if (itemData.data.quality.type === "RARE") {
				setBackgroundCol("rgba(0, 112, 221, 1)");
			} else if (itemData.data.quality.type === "EPIC") {
				setBackgroundCol("rgba(163, 53, 238, 1)");
			} else if (itemData.data.quality.type === "LEGENDARY") {
				setBackgroundCol("rgba(255, 128, 0, 1)");
			} else if (itemData.data.quality.type === "ARTIFACT") {
				setBackgroundCol("rgba(230, 204, 128, 1)");
			} else if (
				itemData.data.quality.type === "HEIRLOOM" ||
				itemData.data.quality.type === "WOW TOKEN"
			) {
				setBackgroundCol("rgba(0, 204, 255, 0.7)");
				setTextCol("black");
			}
		}
	}, [itemData]);

	if (loading) {
		return (
			<div className={css.spinner}>
				<LoadingSpinner />
			</div>
		);
	}

	if (data && itemData) {
		return (
			<div className={css.container}>
				<div
					className={css.img_wrapper}
					style={{
						backgroundColor: backgroundCol,
						boxShadow: `0 8px 32px 0 ${backgroundCol}`,
						opacity: 1
					}}
				>
					{data && <img className={css.img} src={data.assets[0].value}></img>}
				</div>

				<div className={css.item_name_wrapper}>{itemData.data.name.en_GB}</div>
				<div className={css.item_class_wrapper}>
					{itemData.data.item_class.name.en_GB}

					<span className={css.item_subclass}>
						({itemData.data.item_subclass.name.en_GB})
					</span>
				</div>
				<div className={css.item_price_wrapper}>
					{goldCost ? (
						<div>
							<div className={css.cost_container}>{goldCost}</div>
							<div className={css.coin_container}>
								<img className={css.coin} src="gold.png" alt="gold coin" />
							</div>
						</div>
					) : (
						""
					)}
					{silverCost ? (
						<div>
							<div className={css.cost_container}>{silverCost}</div>
							<div className={css.coin_container}>
								<img className={css.coin} src="silver.png" alt="silver coin" />
							</div>
						</div>
					) : (
						""
					)}
					{cooperCost ? (
						<div>
							<div className={css.cost_container}>{cooperCost}</div>
							<div className={css.coin_container}>
								<img className={css.coin} src="copper.png" alt="cooper coin" />
							</div>
						</div>
					) : (
						""
					)}
				</div>

				<div className={css.item_equippable_wrapper}>
					{itemData.data.is_equippable ? (
						<span style={{ color: "greenyellow", fontWeight: "700" }}>
							Equippable
						</span>
					) : (
						<span style={{ color: "red", fontWeight: "700" }}>
							Non equippable
						</span>
					)}
				</div>
				<div className={css.item_stackable_wrapper}>
					{itemData.data.is_stackable ? (
						<span style={{ color: "greenyellow", fontWeight: "700" }}>
							Stackable
						</span>
					) : (
						<span style={{ color: "red", fontWeight: "700" }}>
							Non stackable
						</span>
					)}
				</div>
				<div className={css.item_required_level_wrapper}>
					{itemData.data.is_required_level ? (
						<span style={{ fontWeight: "700" }}>
							{itemData.data.is_required_level}
						</span>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
};
