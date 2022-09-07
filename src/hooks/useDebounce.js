import { useState } from "react";

// export function useDebounce(value, delay) {
// 	const [debouncedValue, setDebouncedValue] = useState(value);
// 	useEffect(
// 		() => {
// 			const handler = setTimeout(() => {
// 				setDebouncedValue(value);
// 			}, delay);

// 			return () => {
// 				clearTimeout(handler);
// 			};
// 		},
// 		[value, delay]
// 	);
// 	return debouncedValue;
// }

export function useDebounce() {
	const [typingTimeout, setTypingTimeout] = useState("");

	function debounce(func, wait = 1000) {
		clearTimeout(typingTimeout);
		const timeout = setTimeout(() => func(), wait);
		setTypingTimeout(timeout);
	}

	return debounce;
}
