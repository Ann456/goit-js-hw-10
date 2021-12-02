function fetchCountries(anyCountryName) {
  return fetch(`https://restcountries.com/v2/name/${anyCountryName}`)
    .then(resp => resp.json());
}

export default { fetchCountries };