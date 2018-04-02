import locked from './locked'

describe('locked reducer', () => {
  const reducer = locked
  const initialState = []

  it('initialstate is equal to an empty array', () => {
    expect(reducer()).toEqual(initialState)
  })
})
