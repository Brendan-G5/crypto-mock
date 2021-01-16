const BASE_URL = 'https://www.stackadapt.com/coinmarketcap';

async function getData() {
  const mapData = await fetchRequest('/map?' + new URLSearchParams ({limit:10, sort:'cmc_rank'}))
  const symbolList = [];
  mapData.data.forEach(element => {
    symbolList.push(element.symbol)
  });
  const quotesData = await fetchRequest('/quotes?' + new URLSearchParams ({symbol:symbolList, convert:'USD' }));
  const finalData = [];
  for (const element in quotesData.data) {
    finalData.push({
      cmc_rank: quotesData.data[element].cmc_rank,
      symbol: quotesData.data[element].symbol,
      price: quotesData.data[element].quote.USD.price
    })
  }
  console.log(finalData);
  return mapData;
}




function fetchRequest(path) {
  return fetch(BASE_URL + path)
    .then((res) => (res.status <= 400 ? res.json() : Promise.reject(res)))
    .catch((err) => {
      console.log(err); // eslint-disable-line no-console
      console.log('error during fetch request'); // eslint-disable-line no-console
    });
}

// circulating_supply: 7500000
// cmc_rank: 9
// date_added: "2019-10-19T09:05:33.462Z"
// id: 2010
// is_active: 1
// is_fiat: 0
// last_updated: "2020-08-18T17:27:32.891Z"
// max_supply: 27000000
// name: "Cardano"
// num_market_pairs: 6574
// platform: null
// quote: {USD: {…}}
// slug: "cardano"
// symbol: "ADA"
// tags: []
// total_supply: 8400000

export default getData;