# CRYPTOMOCK

## A simple App displaying cryptocurrencies  

Not real cryptocurrency prices, data is randomly generated from an API. This is mainly an exercise with Redux.

## Want to Try?

Click [Here!](https://crypto-mock.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/60d6165b-e5ca-432a-9e2f-9869011b405f/deploy-status)](https://app.netlify.com/sites/crypto-mock/deploys)

Netlify not working/taking a long time? (it does that sometimes...)

Run this in your command line instead

```
git clone https://github.com/Brendan-G5/crypto-mock.git

cd crypto-mock

npm i

npm start
```



## How to use it?

1. The app starts with the top 5 cryptocurrencies as ranked by Coin Market Cap (CMC), and includes a dropdown menu containing number 6-10 as ranked by CMC.

![](./assets/Crypto1.png)

2. Selecting the dropdown menu allows to to select a currency to be added to the table.

![](./assets/Crypto2.png)

3. You can add up to all 10.

![](./assets/Crypto3.png)

4. Clicking the remove button removes that currency and places it back on the dropdown list.

![](./assets/Crypto4.png)

## Tech

This was made with React (create-react-app), using Redux for state managment. 

## Improvements

- This app could have way more features, more than 10 currencies, visual representation of the price... etc
