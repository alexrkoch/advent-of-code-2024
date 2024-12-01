import { expect, test } from "bun:test";
import testInput from "./test-input.txt";
import { day1part1, day1part2 } from "./day-1";

test("part 1 should return 11 given the test input", () => {
	expect(day1part1(testInput)).toBe(11);
});

test("part 2 should return 31 given the test input", () => {
	expect(day1part2(testInput)).toBe(31);
});
