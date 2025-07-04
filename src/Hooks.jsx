import { useEffect } from "react";
import { useState } from "react";

export function useFormUtils() {
	const [input, setInput] = useState("");
	const [isShowPassword, setIsShowPassword] = useState(false);
	const handleFocus = (id) => {
		setInput(id);
	};

	const handleBlur = () => {
		setInput("");
	};

	const handleShowPassword = () => {
		setIsShowPassword((prev) => !prev);
	};
	return {
		input,
		isShowPassword,
		setInput,
		handleFocus,
		handleBlur,
		handleShowPassword,
	};
}

export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query, matches]);

	return matches;
};
