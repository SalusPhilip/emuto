import parser from '../identifier'

describe('identifier parser', () => {
  it('parses foobar_123', () => {
    expect(parser.parse('foobar_123').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('foobar_123').value).toEqual({
      type: 'identifier',
      value: 'foobar_123'
    })
  })
  it('does not parse $', () => {
    expect(parser.parse('$').status).toBe(false)
  })
  it('does not parse $bar', () => {
    expect(parser.parse('$bar').status).toBe(false)
  })
  it('does not parse 0foo', () => {
    expect(parser.parse('0foo').status).toBe(false)
  })
})