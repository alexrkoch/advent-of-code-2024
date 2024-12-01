import day1input from "./input.txt";
const typedInput = day1input as string;

interface SplitList {
	left: number[];
	right: number[];
}

console.log("solution is:", day1(typedInput));

export default function day1(rawInput: string): number {
	const splitInput = splitInputLeftRight(rawInput);
	let total = 0;
	for (let i = 0; i < splitInput.left.length; i++) {
		total += Math.abs(splitInput.left[i] - splitInput.right[i]);
	}
	return total;
}

function splitInputLeftRight(input: string): SplitList {
	const result: SplitList = { left: [], right: [] };
	input.split("\n").forEach((i) => {
		const values = i.split("   ");
		result.left.push(Number(values[0]));
		result.right.push(Number(values[1]));
	});
	return { left: result.left.sort(), right: result.right.sort() };
}
