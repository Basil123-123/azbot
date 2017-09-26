// TelegramBot instance
const bot = require('./instance');

// Write your bot commands here.
bot.onText(/^\/start$/, (msg, match)=>{
	bot.sendMessage(msg.chat.id, 'Hi, I\'m AZbot!');
});