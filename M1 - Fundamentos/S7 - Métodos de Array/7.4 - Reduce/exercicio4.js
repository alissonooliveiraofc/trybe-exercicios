const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Aland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];

// ITEM 1 - FUNÇÃO QUE RETORNA A POPULAÇÃO TOTAL DE PAÍSES
const getPopulation = (countries) =>
  countries.reduce((acc, country) => acc + country.population, 0);

// ITEM 2 - FUNÇÃO QUE RETORNA O PAÍS COM O MAIOR NOME
const longestName = (countries) =>
  countries.reduce((acc, country) => {
    if (country.name.length > acc.name.length) {
      return country;
    } else {
      return acc;
    }
  });

// ITEM 3 - FUNÇÃO QUE RETORNA A ÁREA TOTAL DE PAÍSES DE UMA REGIÃO
const totalAreaByRegion = (region = "Europe") => {
  const area = countries.filter((country) => country.region === region);

  if (area.length === 0) {
    return "Região não encontrada";
  }

  return area.reduce((acc, country) => (acc += country.area), 0);
};

// ITEM 4 - RETORNA UM OBJETO CONTENDO PAISES COM A MAIOR ÁREA EM CADA REGIÃO
const getLargestCountriesByRegion = () => {
  const regions = countries.reduce((acc, { region, name, area }) => {
    if (!acc[region] || acc[region].area < area) {
      acc[region] = { name, area };
    }
    return acc;
  }, {});

  return regions;
};

console.log(getLargestCountriesByRegion());
