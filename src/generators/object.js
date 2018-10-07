// @flow

import type { ObjectNodeType, GeneratedCodeType, NodeType } from '../types'

export default ({ value }: ObjectNodeType): GeneratedCodeType =>
  `(_.objectify([${value
    .map((item: NodeType): string => {
      const Generator = require('./generator').default
      return Generator(item)
    })
    .join(', ')}]))`