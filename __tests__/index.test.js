const {sum,subtract,multiply,divide, factorial} = require("../index")

it('should add two numbers correctly', ()=>{
    const result = sum(4,6)

    expect(result).toEqual(10)
})

it('should subtract two numbers correctly', ()=>{
    const result = subtract(4,6)

    expect(result).toEqual(-2)
})

it('should add multiply numbers correctly', ()=>{
    const result = multiply(4,6)

    expect(result).toEqual(24)
})

it('should add divide numbers correctly', ()=>{
    const result = divide(10,5)

    expect(result).toEqual(2)
})


describe('should do factorial', () => {
    it('should throw an error if n factorial is negative', ()=>{
        expect(()=> factorial(-1)).toThrow('Error! Factorial for negative number does not exist.')
    })

    it('should return 1 if n factorial is zero', ()=>{
        expect(factorial(0)).toBe(1)
    })

    it('should return factorial of n if n is positive', ()=>{
        expect(factorial(5)).toBe(120)
    })
})