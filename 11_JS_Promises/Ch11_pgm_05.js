const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchCountriesData = async () => {
    try {
      const response = await fetch(countriesAPI)
      const countries = await response.json()
  
      countries.forEach(country => {
        const name = country.name
        const capital = country.capital
        const languages = country.languages.map(lang => lang.name).join(', ')
        const population = country.population
        const area = country.area
  
        console.log(`Country: ${name}`)
        console.log(`Capital: ${capital}`)
        console.log(`Languages: ${languages}`)
        console.log(`Population: ${population}`)
        console.log(`Area: ${area}`)
        console.log('-------------------------')
      })
    } catch (error) {
      console.error('Error fetching countries data:', error)
    }
  }
  fetchCountriesData()

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.