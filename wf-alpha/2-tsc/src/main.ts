import { someFunction } from './export-import'
import { foo } from './export-import'

console.log('someFunction(): ', someFunction())
console.log('foo: ', foo)  // <--- this is a type
console.log('finished execution')
