import { it, describe, expect } from 'vitest';
import { parseNumberLocale } from './parse-number-locale';

describe('parse number with locale support', () => {
	describe('integers', () => {
		type TestCase = [string, number]; //input, expected output
		const cases: TestCase[] = [
			['0', 0],
			['1', 1],
			['2', 2],
			['10', 10],
			['99', 99],
			['100', 100],
			['456', 456],
			['-1', -1],
			['-2', -2],
			['-10', -10],
			['-99', -99],
			['-100', -100],
			['-456', -456]
		];
		cases.forEach(([input, expected]) => {
			it(`can parse "${input}"0`, () => {
				expect(parseNumberLocale(input)).toBe(expected);
			});
		});
	});
	describe('decimal with dot', () => {
		type TestCase = [string, number]; //input, expected output
		const cases: TestCase[] = [
			['0.0', 0],
			['0.1', 0.1],
			['.1', 0.1],
			['1.0', 1],
			['1.1', 1.1],
			['2.0', 2],
			['2.2', 2.2],
			['10.0', 10],
			['99.0', 99],
			['99.9', 99.9],
			['100.0', 100],
			['456.0', 456],
			['456.789', 456.789],
			['-0.1', -0.1],
			['-.1', -0.1],
			['-1.0', -1],
			['-1.1', -1.1],
			['-2.0', -2],
			['-2.2', -2.2],
			['-10.0', -10],
			['-99.0', -99],
			['-99.9', -99.9],
			['-100.0', -100],
			['-456.0', -456],
			['-456.789', -456.789]
		];
		cases.forEach(([input, expected]) => {
			it(`can parse "${input}"0`, () => {
				expect(parseNumberLocale(input)).toBe(expected);
			});
		});
	});
	describe('decimal with comma', () => {
		type TestCase = [string, number]; //input, expected output
		const cases: TestCase[] = [
			['0,0', 0],
			['0,1', 0.1],
			[',1', 0.1],
			['1,0', 1],
			['1,1', 1.1],
			['2,0', 2],
			['2,2', 2.2],
			['10,0', 10],
			['99,0', 99],
			['99,9', 99.9],
			['100,0', 100],
			['456,0', 456],
			['456,789', 456.789],
			['-0,1', -0.1],
			['-,1', -0.1],
			['-1,0', -1],
			['-1,1', -1.1],
			['-2,0', -2],
			['-2,2', -2.2],
			['-10,0', -10],
			['-99,0', -99],
			['-99,9', -99.9],
			['-100,0', -100],
			['-456,0', -456],
			['-456,789', -456.789]
		];
		cases.forEach(([input, expected]) => {
			it(`can parse "${input}"0`, () => {
				expect(parseNumberLocale(input)).toBe(expected);
			});
		});
	});
});
