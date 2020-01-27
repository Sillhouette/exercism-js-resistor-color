import { colorCode } from './resistor-color.js'

describe("colorCode", () => {
  test("it returns 'Black' when given the number 0.", () => {
    expect(colorCode(0)).toEqual("Black")
  })
})
