import executeWithTimer from "../../utils/executeWithTimer";
import day1input from "./input.txt";
const typedInput = day1input as string;

interface SplitList {
	left: number[];
	right: number[];
}

console.log("part 1 solution is:", executeWithTimer(day1part1, typedInput));
console.log("part 2 solution is:", executeWithTimer(day1part2, typedInput));

export function day1part1(rawInput: string): number {
	const splitInput = splitInputLeftRight(rawInput);
	let total = 0;
	for (let i = 0; i < splitInput.left.length; i++) {
		total += Math.abs(splitInput.left[i] - splitInput.right[i]);
	}
	return total;
}

export function day1part2(rawInput: string): number {
	const splitInput = splitInputLeftRight(rawInput);
	const rightFrequencyMap = getRightFrequencyMap(splitInput.right);
	let total = 0;
	for (let i = 0; i < splitInput.left.length; i++) {
		const leftValue = splitInput.left[i];
		const adjustedLeftValue = leftValue * (rightFrequencyMap[leftValue] || 0);
		total += adjustedLeftValue;
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

function getRightFrequencyMap(rightInput: number[]): Record<number, number> {
	return rightInput.reduce((acc, curr) => {
		if (acc[curr]) {
			acc[curr] = acc[curr] + 1;
		} else {
			acc[curr] = 1;
		}
		return acc;
	}, {} as Record<number, number>);
}
