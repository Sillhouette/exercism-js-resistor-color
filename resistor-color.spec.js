import { colorCode } from './resistor-color.js'

describe("colorCode", () => {
  test("it returns 'Black' when given the number 0.", () => {
    expect(colorCode(0)).toEqual("Black")
  })

  test("it returns 'Brown' when given the number 1.", () => {
    expect(colorCode(1)).toEqual("Brown")
  })

  test("it returns 'Red' when given the number 2.", () => {
    expect(colorCode(2)).toEqual('Red')
  })

  test("it returns 'Orange' when given the number 3.", () => {
    expect(colorCode(3)).toEqual('Orange')
  })

  test("it returns 'Yellow' when given the number 4.", () => {
    expect(colorCode(4)).toEqual('Yellow')
  })

  test("it returns 'Green' when given the number 5.", () => {
    expect(colorCode(5)).toEqual('Green')
  })

  test("it returns 'Blue' when given the number 6.", () => {
    expect(colorCode(6)).toEqual('Blue')
  })

  test("it returns 'Violet' when given the number 7.", () => {
    expect(colorCode(7)).toEqual('Violet')
  })

  test("it returns 'Grey' when given the number 8.", () => {
    expect(colorCode(8)).toEqual('Grey')
  })

  test("it returns 'White' when given the number 9.", () => {
    expect(colorCode(9)).toEqual('White')
  })
})
