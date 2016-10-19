* make 1 service that will make the http request
* make a controller for each of the currencies you are requesting
* make a button for each of the currencies
______
Build an Angular app with at least two controllers, and a service or factory. This app should have buttons to show the current value of two different cryptocurrency. Make sure to inject your service to each controller!

Here is a sample GET request to the cryptonator api. https://api.cryptonator.com/api/ticker/btc-usd This will return the following object:

{
  "ticker": {
    "base":"ETH",
    "target":"USD",
    "price":"11.99255421",
    "volume":"42962.52719390",
    "change":"-0.00093119"
  },
  "timestamp":1476735394,
  "success":true,
  "error":""
}
Here are a few other cryptocurrency pairs, the full list supported by the API is available here:

https://api.cryptonator.com/api/ticker/eth-usd
https://api.cryptonator.com/api/ticker/trump-usd
https://api.cryptonator.com/api/ticker/nav-usd
https://api.cryptonator.com/api/ticker/rep-usd
