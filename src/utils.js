export function visualStroke(input, value, error, isValid) {
	if (error) return "border-status-error";
	if (input === value) return "border-2 border-primary";
	if (isValid) return " border-status-success";
	return "border-stroke";
}
