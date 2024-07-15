const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'



const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI)
    const cats = await response.json()


    const totalWeight = cats.reduce((acc, cat) => {
      const weightRange = cat.weight.metric.split(' - ')
      const minWeight = parseFloat(weightRange[0])
      const maxWeight = parseFloat(weightRange[1])
      const avgWeight = (minWeight + maxWeight) / 2
      return acc + avgWeight
    }, 0)

    const averageWeight = totalWeight / cats.length

    console.log(`Average Weight of Cats: ${averageWeight.toFixed(2)} kg`)
  } catch (error) {
    console.error('Error fetching cat data:', error)
  }
}

fetchAverageCatWeight()



const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    const largestCountries = countries.sort((a, b) => b.area - a.area).slice(0, 10)
    console.log('10 Largest Countries by Area:')
    largestCountries.forEach(country => {
      console.log(`${country.name} - ${country.area} km²`)
    })
  } catch (error) {
    console.error('Error fetching countries data:', error)
  }
}
fetchLargestCountries()


const fetchTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    const languagesSet = new Set()
    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name)
      })
    })
    const totalLanguages = languagesSet.size

    console.log(`Total Number of Official Languages: ${totalLanguages}`)
  } catch (error) {
    console.error('Error fetching countries data:', error)
  }
}
fetchTotalLanguages()




// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.