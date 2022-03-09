import { someFunction } from './export-import'
import type { fooType } from './export-import'

console.log('someFunction(): ', someFunction())
console.log('fooType: ', fooType)  // <--- It is more obvious that we made a mistake here
console.log('finished execution')
