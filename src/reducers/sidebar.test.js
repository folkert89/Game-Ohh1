import sidebar from './sidebar'

describe('sidebar reducer', () => {
  const reducer = sidebar
  const initialState = 'open'

  it('intial state for sidebar is "open"', () => {
    expect(reducer()).toEqual(initialState)
  })
})
