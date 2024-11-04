import { describe, it, expect } from 'bun:test';
import { sum } from './index.js';

describe('Calculator', () => {
    it('should add correctly', () => {
        const A = "1";
        const B = 1;

        const actualValue = sum(A, B);

        const expectedValue = "11";
        expect(actualValue).toBe(expectedValue);
    })
    it('should add negative numbers', () => {
        const A = -2;
        const B = 4;

        const actualValue = sum(A, B);

        const expectedValue = 2;
        expect(actualValue).toBe(expectedValue);
    })
    it('should add decimal numbers', () => {
        const A = 1.5;
        const B = 2.14;

        const actualValue = sum(A, B);

        const expectedValue = 3.64;
        expect(actualValue).toBe(expectedValue);
    })

})