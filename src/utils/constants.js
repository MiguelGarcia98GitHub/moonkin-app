const getToken = async () => {
	let access_token = "";
	const TokenResponse = await fetch("https://us.battle.net/oauth/token", {
		body: "grant_type=client_credentials",
		headers: {
			Authorization: `Basic ${import.meta.env.VITE_API_AUTH_CREDENTIALS}`, // encoded to base 64 (needs to be or wont work)
			"Content-Type": "application/x-www-form-urlencoded"
		},
		method: "POST"
	}).then(response => (access_token = response.json()));
	console.log("&access_token=" + TokenResponse.access_token);
	return "&access_token=" + TokenResponse.access_token;
};

export const API_URL_access_token = await getToken();
console.log(import.meta.env.VITE_API_AUTH_CREDENTIALS);
