const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const setA = new Set(a)
const setB = new Set(b)

const union = new Set([...setA, ...setB])
console.log('Union:', [...union])

const intersection = new Set([...setA].filter(x => setB.has(x)))
console.log('Interaction:', [...intersection])

const difference = new Set([...setA].filter(x => !setB.has(x)))
console.log('Difference (a with b):', [...difference])



// Find a union b
// Find a intersection b
// Find a with b