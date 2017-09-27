# AZbot
[![GitHub issues](https://img.shields.io/github/issues/meness/azbot.svg)](https://github.com/meness/azbot/issues)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/meness/azbot/blob/master/LICENSE)

AZbot is a [Node.js](https://nodejs.org/) application using [Express](https://expressjs.com/) and [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api/).

## Highlights
* Easy to use
* Based on [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), and [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api/)
* Good documentation
* Deploying on Heroku

## Prerequisites
* Installed [Heroku CLI](https://cli.heroku.com/)
* Installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Steps

### Clone
```sh
$ git clone git@github.com:meness/azbot.git AZbot
$ cd AZbot
$ npm install
```

### BotFather
Create a new bot with [BotFather](https://telegram.me/BotFather), set the given token for `BOT_TOKEN` key in `.env` file, then save it.

### Start the Bot
```sh
$ npm start
```

Now send `/start` to the bot and see what happens ;)

## More Commands
Read the [API reference](https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md), then write your commands in `bot/commands.js` file.

## Deploy on Heroku
```
$ heroku create
$ git add .
$ git push heroku master
```

## Credits

* [Alireza Eskandarpour Shoferi](https://about.me/meness)
* [Contributors](https://github.com/meness/azbot/graphs/contributors)

## License
AZbot is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
