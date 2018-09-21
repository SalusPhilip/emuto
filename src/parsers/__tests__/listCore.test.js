import parser from '../listCore'

describe('listCore parser', () => {
  it('parses null  , false', () => {
    expect(parser.parse('null  , false').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('.,.').value).toEqual({
      type: 'listCore',
      value: [
        {
          type: 'input',
          value: '.'
        },
        {
          type: 'input',
          value: '.'
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('.,., null').value).toEqual({
      type: 'listCore',
      value: [
        {
          type: 'input',
          value: '.'
        },
        {
          type: 'input',
          value: '.'
        },
        {
          type: 'primitive',
          value: 'null'
        }
      ]
    })
  })
})