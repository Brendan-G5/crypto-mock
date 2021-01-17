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
      price: quotesData.data[element].quote.USD.price,
      name: quotesData.data[element].name
    })
  }
  // let finalData = [
  //   {
  //     cmc_rank:0,
  //     symbol:'ABC',
  //     price:0
  //   },
  //   {
  //     cmc_rank:1,
  //     symbol:'DEF',
  //     price:1
  //   },
  //   {
  //     cmc_rank:2,
  //     symbol:'GHI',
  //     price:2
  //   },
  //   {
  //     cmc_rank:3,
  //     symbol:'JKL',
  //     price:3
  //   },
  //   {
  //     cmc_rank:4,
  //     symbol:'MNO',
  //     price:4
  //   },
  //   {
  //     cmc_rank:5,
  //     symbol:'PQR',
  //     price:5
  //   },
  //   {
  //     cmc_rank:6,
  //     symbol:'STU',
  //     price:6
  //   },
  //   {
  //     cmc_rank:7,
  //     symbol:'VWX',
  //     price:7
  //   },
  //   {
  //     cmc_rank:8,
  //     symbol:'YZ1',
  //     price:8
  //   },
  //   {
  //     cmc_rank:9,
  //     symbol:'234',
  //     price:9
  //   }
  // ]
  // console.log(finalData, 'Here is the data ebing returned')
  return finalData;
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