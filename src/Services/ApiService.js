//DOC
//Here is where the data is API is called.
//Firstly the map API is called to get 10 currencies Symbols (I chose to fetch the top 10 CMC) which are later used in the quotes API to get the informtaion
//needed for the Table. The data is then organized here and put into an array containing all 10 objects (in order of CMC rank)
//This data is returned to the DisplayData Action.

const BASE_URL = 'https://www.stackadapt.com/coinmarketcap';

async function getData() {
  const mapData = await fetchRequest('/map?' + new URLSearchParams ({limit:10, sort:'cmc_rank'}))
  const symbolList = [];
  mapData.data.forEach(element => {
    symbolList.push(element.symbol)
  });
  const quotesData = await fetchRequest('/quotes?' + new URLSearchParams ({symbol:symbolList}));
  const finalData = [];
  for (const element in quotesData.data) {
    finalData.push({
      cmc_rank: quotesData.data[element].cmc_rank,
      symbol: quotesData.data[element].symbol,
      price: quotesData.data[element].quote.USD.price,
      name: quotesData.data[element].name
    })
  }
  return finalData;
}

//DOC
//This fetch request function is used by both the maps and quotes API calls, catches any errors here.
function fetchRequest(path) {
  return fetch(BASE_URL + path)
    .then((res) => (res.status <= 400 ? res.json() : Promise.reject(res)))
    .catch((err) => {
      console.log(err);
      console.log('error during fetch request');
    });
}

export default getData;