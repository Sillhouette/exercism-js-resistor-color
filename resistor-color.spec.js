import { colorCode } from './resistor-color.js'

describe("colorCode", () => {
  test("it returns 0 when given the color 'black'.", () => {
    const given = "black"
    const action = colorCode(given)
    expect(action).toEqual(0)
  })

  test("it returns 1 when given the color 'brown'.", () => {
    const given = "brown"
    const action = colorCode(given)
    expect(action).toEqual(1)
  })

  test("it returns 2 when given the color 'red'.", () => {
    const given = "red"
    const action = colorCode(given)
    expect(action).toEqual(2)
  })

  test("it returns 3 when given the color 'orange'.", () => {
    const given = "orange"
    const action = colorCode(given)
    expect(action).toEqual(3)
  })

  test("it returns 4 when given the color 'yellow'.", () => {
    const given = "yellow"
    const action = colorCode(given)
    expect(action).toEqual(4)
  })

  test("it returns 5 when given the color 'green'.", () => {
    const given = "green"
    const action = colorCode(given)
    expect(action).toEqual(5)
  })

  test("it returns 6 when given the color 'blue'.", () => {
    const given = "blue"
    const action = colorCode(given)
    expect(action).toEqual(6)
  })

  test("it returns 7 when given the color 'violet'.", () => {
    const given = "violet"
    const action = colorCode(given)
    expect(action).toEqual(7)
  })

  test("it returns 8 when given the color 'grey'.", () => {
    const given = "grey"
    const action = colorCode(given)
    expect(action).toEqual(8)
  })

  test("it returns 9 when given the color 'white'.", () => {
    const given = "white"
    const action = colorCode(given)
    expect(action).toEqual(9)
  })
})
