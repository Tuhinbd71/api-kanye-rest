const loadcountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadcountries();

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}, ${country.capital}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {

}