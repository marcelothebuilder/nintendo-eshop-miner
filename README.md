# Welcome to nintendo-eshop-miner 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: Private](https://img.shields.io/badge/license-Private-%233498db)](#)

> eShop mining. Nintendo I love your game please give me a special edition Nintendo Switch

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Developing

Open in one terminal:

```sh
npm dev
```

And on the other:

```sh
node dist/index.js
```

## Run tests

```sh
npm run test
```

## Currency

http://api.fixer.io/latest

## Understanding Nintendo

Every eShop is separated in distinct regions. MAYBE we can get uniform data by using their eShop Switch App's API, but we need a way to perform a MITM attack with a hacked Switch.

ANY game price can be obtained by fetching:
```
GET https://api.ec.nintendo.com/v1/price?country=<country_code>&lang=en&ids=<comma separated list of ids>
```

### Country codes

Americas:
* AG AI AR AW BB BM BO BR BS BZ CA CL CO CR DM DO EC GD GF GP GT GY HN HT JM KN KY LC MQ MS MX NI PA PE PY SR SV TC TT US UY VC VE VG VI

Europe:
* AD AL AT AU BA BE BG BW CH CY CZ DE DJ DK EE ER ES FI FR GB GG GI GR HR HU IE IM IS IT JE LI LS LT LU LV MC ME MK ML MR MT MZ NA NE NL NO NZ PL PT RO RS RU SD SE SI SK SM SO SZ TD VA ZA ZM ZW

Asia:
* AE AZ HK IN JP KR MY SA SG TR TW

Current status:

| Country            | Status      | Source Type   | Source details                                                                                                                      |
|--------------------|-------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
| United States      | Done        | Algolia       | https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_en_us                                                                     |
| Canada             | Done        | Algolia       | https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_en_ca or https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_fr_ca  |
| Mexico             |             | HTML Crawling | Fetch game list from USA, price from https://api.ec.nintendo.com/v1/price?country=MX&lang=pt&ids=<game id> (70010000023394 example) |
| Brazil             |             | HTML Crawling | https://store.nintendo.com.br/games/all-released-games                                                                              |
| Chile              |             | HTML Crawling | https://store.nintendo.cl/                                                                                                          |
| Argentina          |             | HTML Crawling | https://store.nintendo.com.ar                                                                                                       |
| Peru               |             | HTML Crawling | https://store.nintendo.com.pe/                                                                                                      |
| Colombia           |             | HTML Crawling | https://store.nintendo.co/                                                                                                          |
| New Zealand        |             |               |                                                                                                                                     |
| South Africa       |             |               |                                                                                                                                     |
| Norway             |             |               |                                                                                                                                     |
| Russian Federation |             |               |                                                                                                                                     |
| Sweden             |             |               |                                                                                                                                     |
| Czech Republic     |             |               |                                                                                                                                     |
| Poland             |             |               |                                                                                                                                     |
| Japan              |             |               |                                                                                                                                     |
| Australia          |             |               |                                                                                                                                     |
| United Kingdom     |             |               |                                                                                                                                     |
| Denmark            |             |               |                                                                                                                                     |
| Cyprus             |             |               |                                                                                                                                     |
| Austria            |             |               |                                                                                                                                     |
| France             |             |               |                                                                                                                                     |
| Estonia            |             |               |                                                                                                                                     |
| Germany            |             |               |                                                                                                                                     |
| Bulgaria           |             |               |                                                                                                                                     |
| Finland            |             |               |                                                                                                                                     |
| Spain              |             |               |                                                                                                                                     |
| Belgium            |             |               |                                                                                                                                     |
| Romania            |             |               |                                                                                                                                     |
| Lithuania          |             |               |                                                                                                                                     |
| Hungary            |             |               |                                                                                                                                     |
| Ireland            |             |               |                                                                                                                                     |
| Israel             |             |               |                                                                                                                                     |
| Luxembourg         |             |               |                                                                                                                                     |
| Portugal           |             |               |                                                                                                                                     |
| Latvia             |             |               |                                                                                                                                     |
| Slovakia           |             |               |                                                                                                                                     |
| Croatia            |             |               |                                                                                                                                     |
| Italy              |             |               |                                                                                                                                     |
| Netherlands        |             |               |                                                                                                                                     |
| Greece             |             |               |                                                                                                                                     |
| Malta              |             |               |                                                                                                                                     |
| Slovenia           |             |               |                                                                                                                                     |
| Switzerland        |             |               |                                                                                                                                     |

## Author

👤 **Revok**


## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_