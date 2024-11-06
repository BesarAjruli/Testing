const {capitalized, reverseString, calculator, caesarCipher, analyzeArray} = require('./index.js')

test('Capitalize', () => {
expect(capitalized('test')).toMatch(/Test/)
})

test('Reverse String', () => {
    expect(reverseString('test')).toMatch('tset')
})

test('Calculator: sum, substract, multiply, divide', () => {
    expect(calculator.divide(1,2)).toBe(0.5)
})

test('Caesar Cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch(/Khoor, Zruog!/)
})

test('Analyse Array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(object)
})

const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
 };
