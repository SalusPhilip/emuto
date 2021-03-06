import parser from '../tuple'

describe('tuple parser', () => {
  it('parses true : null', () => {
    expect(parser.parse('true : null').status).toBe(true)
  })
  it('parses false: true', () => {
    expect(parser.parse('false: true').status).toBe(true)
  })
  it('returns correct value 1', () => {
    expect(parser.parse('true: false').value).toEqual({
      name: 'tuple',
      value: [
        { name: 'primitive', value: 'true' },
        { name: 'primitive', value: 'false' }
      ]
    })
  })
  it('returns correct value 2', () => {
    expect(parser.parse('null: null').value).toEqual({
      name: 'tuple',
      value: [
        { name: 'primitive', value: 'null' },
        { name: 'primitive', value: 'null' }
      ]
    })
  })
  it('returns primitive', () => {
    expect(parser.parse('null').value).toEqual({
      name: 'primitive',
      value: 'null'
    })
  })
})
