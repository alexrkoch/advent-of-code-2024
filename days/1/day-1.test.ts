import { expect, test } from "bun:test";
import testInput from "./test-input.txt";
import day1 from "./day-1";

test("should return 11 given the test input", ()  => {
	expect(day1(testInput)).toBe(11);
});