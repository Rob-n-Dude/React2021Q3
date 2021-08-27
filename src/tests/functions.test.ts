import { titleParcer } from "../shared/functions"

describe('Testing shared functions', () => {
    it('should return "Masha+Pasha"', () => {
        expect(titleParcer('Masha Pasha')).toBe('Masha+Pasha')
    })
})