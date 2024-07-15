const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const emptySet = new Set()
console.log(emptySet)

 const setWithNumbers = new Set()
 for (let i = 0; i <= 10; i++) {
  setWithNumbers.add(i)
}
console.log(setWithNumbers)

setWithNumbers.delete(5)
console.log(setWithNumbers)

setWithNumbers.clear()
console.log(setWithNumbers)

const stringArray = ['a', 'b', 'c', 'd', 'e']
const stringSet = new Set(stringArray)
console.log(stringSet)

const countriesMap = new Map()
countries.forEach(country =>{
    countriesMap.set(country, country.length)
})
console.log(countriesMap)

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country