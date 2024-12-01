export default function executeWithTimer<T, K>(
	callback: (args: T) => K,
	args: T
): K {
	const startTime = performance.now();
	const result = callback(args);
	console.log("Time to execute in ms: ", performance.now() - startTime);
	return result;
}
