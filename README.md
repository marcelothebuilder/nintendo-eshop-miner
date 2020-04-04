# Welcome to nintendo-eshop-miner 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: Private](https://img.shields.io/badge/license-Private-%233498db)](#)

> eShop mining. Nintendo I love your game please give me a special edition Nintendo Switch

## Install

```sh
npm install
npm run setup # installs git pre-commit hooks
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

- AG AI AR AW BB BM BO BR BS BZ CA CL CO CR DM DO EC GD GF GP GT GY HN HT JM KN KY LC MQ MS MX NI PA PE PY SR SV TC TT US UY VC VE VG VI

Europe:

- AD AL AT AU BA BE BG BW CH CY CZ DE DJ DK EE ER ES FI FR GB GG GI GR HR HU IE IM IS IT JE LI LS LT LU LV MC ME MK ML MR MT MZ NA NE NL NO NZ PL PT RO RS RU SD SE SI SK SM SO SZ TD VA ZA ZM ZW

Asia:

- AE AZ HK IN JP KR MY SA SG TR TW

Confirmed shops (Through eShop price query)

| Code | Country        |
| ---- | -------------- |
| AR   | Argentina      |
| AU   | Australia      |
| AT   | Austria        |
| BE   | Belgium        |
| BR   | Brazil         |
| BG   | Bulgaria       |
| CA   | Canada         |
| CL   | Chile          |
| CN   | China          |
| CO   | Colombia       |
| HR   | Croatia        |
| CY   | Cyprus         |
| CZ   | Czechia        |
| DK   | Denmark        |
| EE   | Estonia        |
| FI   | Finland        |
| FR   | France         |
| DE   | Germany        |
| GR   | Greece         |
| HK   | Hong Kong      |
| HU   | Hungary        |
| IE   | Ireland        |
| IL   | Israel         |
| IT   | Italy          |
| JP   | Japan          |
| KR   | South Korea    |
| LV   | Latvia         |
| LT   | Lithuania      |
| LU   | Luxembourg     |
| MT   | Malta          |
| MX   | Mexico         |
| NL   | Netherlands    |
| NZ   | New Zealand    |
| NO   | Norway         |
| PE   | Peru           |
| PT   | Portugal       |
| RO   | Romania        |
| RU   | Russia         |
| SK   | Slovakia       |
| SI   | Slovenia       |
| ZA   | South Africa   |
| ES   | Spain          |
| SE   | Sweden         |
| CH   | Switzerland    |
| GB   | United Kingdom |
| US   | United States  |

Current status:

| Country            | Status  | Source Type   | Source details                                                                                                                        |
| ------------------ | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| United States      | Done    | Algolia       | https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_en_us                                                                       |
| Canada             | Done    | Algolia       | https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_en_ca or https://u3b6gr4ua3-dsn.algolia.net/1/indexes/noa_aem_game_fr_ca    |
| South Africa       | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Russian Federation | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| United Kingdom     | Done    | Solr API      | https://searching.nintendo-europe.com (en, same as Ireland)                                                                           |
| Austria            | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| France             | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Germany            | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Schweiz (German)   | Done    | Solr API      | https://searching.nintendo-europe.com (chde)                                                                                          |
| Suisse (French)    | Done    | Solr API      | https://searching.nintendo-europe.com (chfr)                                                                                          |
| Svizzera (Italian) | Done    | Solr API      | https://searching.nintendo-europe.com (chit)                                                                                          |
| Switzerland        | Done    | Solr API      | CHF Through multilang above                                                                                                           |
| Spain              | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Ireland            | Done    | Solr API      | https://searching.nintendo-europe.com (en, same as UK)                                                                                |
| Portugal           | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Italy              | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Netherlands        | Done    | Solr API      | https://searching.nintendo-europe.com                                                                                                 |
| Brazil             | Done    | HTML Crawling | https://store.nintendo.com.br/games/all-released-games                                                                                |
| Chile              | Done    | HTML Crawling | https://store.nintendo.cl/                                                                                                            |
| Argentina          | Done    | HTML Crawling | https://store.nintendo.com.ar                                                                                                         |
| Peru               | Done    | HTML Crawling | https://store.nintendo.com.pe/                                                                                                        |
| Colombia           | Done    | HTML Crawling | https://store.nintendo.co/                                                                                                            |
| Japan              | Done    | JSON API      | https://search.nintendo.jp/nintendo_soft/search.json                                                                                  |
| Taiwan             | Done    | JSON API      | https://www.nintendo.tw/data/json/topics.json (Taiwan and HK data seems to be the same)                                               |
| Hong Kong          | Done    | JSON API      | https://www.nintendo.hk/data/json/topics.json (Taiwan and HK data seems to be the same)                                               |
| Korea              | Done    | PHP Api       | https://www.nintendo.co.kr/lib/ajax/all_soft_list.php                                                                                 |
| Norway             |         | HTML Crawling | https://www.nintendo.no/spill/nintendo-switch                                                                                         |
| Sweden             |         | HTML Crawling | https://www.nintendo.se/spel/nintendo-switch                                                                                          |
| Poland             |         | HTML Crawling | http://www.nintendo.pl/category/switch-gry/                                                                                           |
| Australia          |         | HTML Crawling | https://www.nintendo.com.au/index.php?action=prodcatalogue&form_name=adv_search&s_field=date_added&s_order=desc&category=240&start=12 |
| Denmark            |         | HTML Crawling | https://www.nintendo.dk/spil/nintendo-switch                                                                                          |
| Finland            |         | HTML Crawling | https://nintendo.fi/pelit/nintendo-switch                                                                                             |
| Hungary            |         | HTML Crawling | http://www.nintendo.hu/category/switch-szoftver/                                                                                      |
| Israel             |         | HTML Crawling | https://www.nintendo.co.il/pages/31432-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D (what is this?)                                           |
| Mexico             |         | HTML Crawling | Fetch game list from USA, price from https://api.ec.nintendo.com/v1/price?country=MX&lang=pt&ids=<game id> (70010000023394 example)   |
| New Zealand        |         |               | Website redirects to Australia....?                                                                                                   |
| Czech Republic     |         |               | (price available)                                                                                                                     |
| Malta              |         |               | EUR                                                                                                                                   |
| Slovenia           |         |               | EUR                                                                                                                                   |
| Latvia             |         |               | EUR                                                                                                                                   |
| Slovakia           |         |               | EUR                                                                                                                                   |
| Croatia            |         |               | EUR                                                                                                                                   |
| Luxembourg         |         |               | EUR                                                                                                                                   |
| Belgium            |         |               | EUR                                                                                                                                   |
| Romania            |         |               | EUR                                                                                                                                   |
| Lithuania          |         |               | EUR                                                                                                                                   |
| Bulgaria           |         |               | EUR                                                                                                                                   |
| Cyprus             |         |               | EUR                                                                                                                                   |
| Estonia            |         |               | EUR                                                                                                                                   |
| Greece             | Wont do |               | https://www.cdmedia.gr/playroom.html dafuq is this?                                                                                   |
| China Mainland     | Wont Do | ????????      | China is a mystery                                                                                                                    |

## Project snippets

Generate new ones with: [Snippet Generator](https://snippet-generator.app/)

Tab trigger keywords:

- bdd: creates a new BDD test with a new instance case
  - [Generator link](https://snippet-generator.app/?description=BDD+Test&tabtrigger=bdd&snippet=import+%7B+expect+%7D+from+%22chai%22%3B%0Aimport+%7B+describe%2C+it%2C+afterEach+%7D+from+%22mocha%22%3B%0Aimport+sinon+from+%22sinon%22%3B%0Aimport+%7B+%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D+%7D+from+%22.%2F%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%22%3B%0A%0Adescribe%28%22%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%22%2C+%28%29+%3D%3E+%7B%0A++afterEach%28%28%29+%3D%3E+sinon.restore%28%29%29%3B%0A%0A++it%28%22should+be+created+successfully%22%2C+%28%29+%3D%3E+%7B%0A++++%2F%2F+eslint-disable-next-line+no-new%0A++++const+instance+%3D+new+%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%28%29%3B%0A++++expect%28instance%29.to.be.instanceOf%28%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%29%3B%0A++%7D%29%3B%0A%7D%29%3B%0A&mode=vscode)
- bddmoxios: creates a new bdd test with moxios (network tests)
  - [Generator Link](https://snippet-generator.app/?description=BDD+Test+Moxios&tabtrigger=bddmoxios&snippet=import+%7B+expect+%7D+from+%22chai%22%3B%0Aimport+%7B+describe%2C+it%2C+afterEach+%7D+from+%22mocha%22%3B%0Aimport+sinon+from+%22sinon%22%3B%0Aimport+moxios+from+%22moxios%22%3B++%0Aimport+%7B+%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D+%7D+from+%22.%2F%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%22%3B%0A%0Adescribe%28%22%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%22%2C+%28%29+%3D%3E+%7B%0A++afterEach%28%28%29+%3D%3E+sinon.restore%28%29%29%3B%0A%0A++it%28%22should+be+created+successfully%22%2C+%28%29+%3D%3E+%7B%0A++++%2F%2F+eslint-disable-next-line+no-new%0A++++const+instance+%3D+new+%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%28%29%3B%0A++++expect%28instance%29.to.be.instanceOf%28%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%29%3B%0A++%7D%29%3B%0A%0A++it%28%22request+test%21%22%2C+%28done%29+%3D%3E+%7B%0A++++++const+dumpSpy+%3D+sinon.spy%28%29%3B%0A++++++const+instance+%3D+new+%24%7BTM_FILENAME_BASE%2F%28.spec%29%2F%2F%7D%28%29%3B%0A++++++%2F%2F+perform+request%0A++++++%2F%2F+const+promise+%3D+instance.promiseReturningMethod%28%29.then%28dumpSpy%29%3B%0A+++++++moxios.wait%28async+%28%29+%3D%3E+%7B%0A%0A+++++++const+requestResponse+%3D+moxios.requests.mostRecent%28%29%3B%0A+++++++requestResponse.respondWith%28%7B%7D%29%0A+++++++%2F%2F+await+promise%0A%0A+++++++%2F%2F+assertions%0A+++++++++%2F%2F+check+dumpSpy.lastCall.lastArg.pop%28%29%3B+for+promise+result%0A%7D%29%3B++%0A%7D%29%3B%0A%7D%29%3B%0A&mode=vscode)

## Author

👤 **Revok**

## The index.ts banner

[Here](https://github.com/syntax-samurai/zelda)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
