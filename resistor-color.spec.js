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
})
