const BASE_URL = 'https://restcountries.com/v2';
function fetchCountries(anyCountryName) {
  return fetch(`${BASE_URL}/name/${anyCountryName}?fields=name,capital,population,flag,languages`)
    .then(resp => resp.json());
}

export default { fetchCountries };




