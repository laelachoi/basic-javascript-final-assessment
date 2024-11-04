import { describe, it, expect } from 'bun:test';
import sum from './index.js';

describe('Calculator', () => {
    it('should return 0 if sum with negative number', () => {
        const a = -6;
        const b = 9;

        const actualValue = sum(a, b);

        const expectedValue = 0;
        expect(actualValue).toBe(expectedValue);
    })
    it('should return 0 if sum with invalid type(string)', () => {
        const a = "2";
        const b = 4;

        const actualValue = sum(a, b);

        const expectedValue = 0;
        expect(actualValue).toBe(expectedValue);
    })
    it('should return 0 if sum with invalid type(boolean)', () => {
        const a = 10;
        const b = true;

        const actualValue = sum(a, b);

        const expectedValue = 0;
        expect(actualValue).toBe(expectedValue);
    })
    it('should add correctly', () => {
        const a = 2;
        const b = 5;

        const actualValue = sum(a, b);

        const expectedValue = 7;
        expect(actualValue).toBe(expectedValue);
    })
    it('should add decimal numbers', () => {
        const a = 2.5;
        const b = 3.1;

        const actualValue = sum(a, b);

        const expectedValue = 5.6;
        expect(actualValue).toBe(expectedValue);
    })
})