import { someFunction } from './export-import'
import type { fooType } from './export-import'

console.log('someFunction(): ', someFunction())
console.log('fooType: ', fooType)
console.log('finished execution')
