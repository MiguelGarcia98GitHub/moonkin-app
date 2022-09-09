import { useEffect, useState } from "react";

export const useFetch = url => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState(); // null or empty works well for everything: strings, arrays, objects, perfect for generic fetch where we dont know what stuff we are gonna get back, to be reused with different urls

	useEffect(() => {
		if (!url) return;
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${url}${"&access_token=USXfEF0r8EuvQqyYnInRgPTnTSb35HHl22"}`
				);
				const data = await response.json();
				setData(data);
				setTimeout(() => {
					setLoading(false);
					setError(false);
				}, 500);
			} catch (e) {
				setData([]);
				setTimeout(() => {
					setLoading(false);
					setError(true);
				}, 500);
			}
		};

		fetchData();
	}, [url]);

	return { data, setData, error, setError, loading, setLoading };
};
