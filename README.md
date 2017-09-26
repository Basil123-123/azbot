# AZbot
Create a Telegram bot as easy as clonning this repository. AZbot is a nodejs application using [Express 4](http://expressjs.com/) and [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/).

## Highlights
* Easy to use
* nodejs performance
* node-telegram-bot-api as the Telegram bot API for nodejs
* Using express 4
* good documentation
* deploy to heroku

## Project Structure
AZbot has an easy to understand project structure. Read `STRUCTURE.md` file for more information.

## Prequisti
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

### BotFather and the Token
Create your bot using BotFather and save the given token in `.env` for `BOT_TOKEN` key.

### Start the bot
```sh
$ npm start
```

## Deploy to Heroku
```
$ heroku create
$ git add .
$ git push heroku master
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Author
* Alireza Eskandarpour Shoferi