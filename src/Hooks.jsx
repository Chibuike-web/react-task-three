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
