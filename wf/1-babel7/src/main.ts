import { someFunction } from './export-import'
import { foo } from './export-import'

console.log('someFunction(): ', someFunction())
console.log('foo: ', foo) // <------------ using foo here
console.log('finished execution')
