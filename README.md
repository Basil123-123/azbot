# AZbot
[![npm](https://img.shields.io/npm/dt/meness/azbot.svg)]()
[![npm](https://img.shields.io/npm/v/meness/azbot.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/meness/azbot)
Create Telegram bots as easy as cloning this repository. AZbot is a nodejs application using [Express 4](http://expressjs.com/) and [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/).

## Highlights
* Easy to use
* nodejs performance
* node-telegram-bot-api as the Telegram bot API for nodejs
* Using express 4
* good documentation
* deploy to heroku

## Prerequisites
* Installed [Heroku CLI](https://cli.heroku.com/
* Installed [Node.js](http://nodejs.org/)
* Installed NPM

## Run

### Clone
```sh
$ git clone git@github.com:meness/azbot.git AZbot
$ cd AZbot
$ npm install
$ npm start
```

### BotFather & Token
Create your bot using BotFather and save the given token in `.env` for `BOT_TOKEN` key.

### Start the Bot
```sh
$ npm start
```

Now send `/start` to the bot and see what happens ;)

## More Commands
Read [API reference](https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md) carefully, then write your commands in `/bot/commands.js` file.

## Deploy to Heroku
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
