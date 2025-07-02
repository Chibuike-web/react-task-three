export function visualStroke(input, value, error) {
	if (error) return "border-status-error";
	if (input === value) return "border-2 border-primary";
	return "border-stroke";
}
