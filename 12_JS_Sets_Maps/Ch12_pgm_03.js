const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const countriesAPI = 'https://restcountries.com/v2/all'

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    return countries
  } catch (error) {
    console.error('Error fetching countries data:', error)
  }
}

const countUniqueLanguages = async () => {
  const countries = await fetchCountriesData()
  
  const languagesSet = new Set()
  countries.forEach(country => {
    country.languages.forEach(language => {
      languagesSet.add(language.name)
    })
  })
  
  console.log(`Total Number of Unique Languages: ${languagesSet.size}`)
}

const mostSpokenLanguages = async (countries, topN) => {
  const languageCount = {}
  
  countries.forEach(country => {
    country.languages.forEach(language => {
      if (language.name in languageCount) {
        languageCount[language.name] += 1
      } else {
        languageCount[language.name] = 1
      }
    })
  })
  const sortedLanguages = Object.entries(languageCount)
    .map(([language, count]) => ({ [language]: count }))
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
  
  return sortedLanguages.slice(0, topN)
}

const displayMostSpokenLanguages = async (topN) => {
  const countries = await fetchCountriesData()
  const mostSpoken = await mostSpokenLanguages(countries, topN)
  console.log(mostSpoken)
}
countUniqueLanguages()
displayMostSpokenLanguages(10)
displayMostSpokenLanguages(3)






























// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]