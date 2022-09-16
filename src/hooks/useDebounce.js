import { useState } from "react";

export function useDebounce() {
	const [typingTimeout, setTypingTimeout] = useState(6000);

	function debounce(func, wait = 6000) {
		clearTimeout(typingTimeout);
		const timeout = setTimeout(() => func, wait);
		setTypingTimeout(timeout);
	}

	return debounce;
}
