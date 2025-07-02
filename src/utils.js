export function visualStroke(isActive, error) {
	if (error) return "border-status-error";
	if (isActive) return "border-2 border-primary";
	return "border-stroke";
}
