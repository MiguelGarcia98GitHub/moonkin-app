import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null); // null works well for everything: strings, arrays, objects, perfect for generic fetch where we dont know what stuff we are gonna get back, to be reused with different urls

	useEffect(() => {
		if (!url || !token) return;
		const fetchData = async () => {
			try {
				const response = await fetch(`${url}${token}`);
				const data = await response.json();
				setData(data);
				setLoading(false);
				setError(false);
			} catch (e) {
				setData([]);
				setLoading(false);
				setError(true);
			}
		};

		fetchData();
	}, [url]);

	return { data, setData, error, setError, loading, setLoading };
};
