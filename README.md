# AZbot
[![npm](https://img.shields.io/npm/dt/meness/azbot.svg)](https://www.npmjs.com/package/azbot)
[![npm](https://img.shields.io/npm/v/meness/azbot.svg)](https://www.npmjs.com/package/azbot)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/meness/azbot)

AZbot is a [Node.js](https://nodejs.org/) application using [Express](https://expressjs.com/) and [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/).

## Highlights
* Easy to use
* [Node.js](https://nodejs.org/)
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/)
* [Express](https://expressjs.com/)
* Good documentation
* Deploying on Heroku

## Prerequisites
* Installed [Heroku CLI](https://cli.heroku.com/)
* Installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Run

### Clone
```sh
$ git clone git@github.com:meness/azbot.git AZbot
$ cd AZbot
$ npm install
```

### BotFather & Token
Create a new bot with [BotFather](https://telegram.me/BotFather), set the given token for `BOT_TOKEN` key in `.env` file, then save file.

### Start the Bot
```sh
$ npm start
```

Now send `/start` to the bot and see what happens ;)

## More Commands
Read [API reference](https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md) carefully, then write your commands in `/bot/commands.js` file.

## Deploy on Heroku
```
$ heroku create
$ git add .
$ git push heroku master
```

## Credits

* [Alireza Eskandarpour Shoferi](https://about.me/meness)
* [Contributors](https://github.com/meness/verifi/graphs/contributors)

## License
AZbot is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
