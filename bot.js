var http = require('http');
var recast = require('recastai');
var RtmClient = require('@slack/client').RtmClient;

var config = require('./config.js');
var replyBot = require('./modules/leon-bot');
var replyGreetings = require('./modules/greetings');
var replyGoodbyes = require('./modules/goodbyes');
var replyHelp = require('./modules/help');

var token = process.env.SLACK_API_TOKEN || config.slack.Token;
var rtm = new RtmClient(token, {logLevel: false});
rtm.start();
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

rtm.on(RTM_EVENTS.MESSAGE, function(message) {

	var user = rtm.dataStore.getUserById(message.user);
	if (user != null)
    	var dm = rtm.dataStore.getDMByName(user.name);
	else
		return(0);
	find_login(message, dm, rtm);
});

function find_login (message, dm, rtm) {

	var y = 0;
	var login = null;
	var CLIENT = new recast.Client(config.recast.request_token);
	CLIENT.textRequest(message.text, (res, err) => {

		while(res.sentences[0].entities[y]!= null){
			if (res.sentences[0].entities[y].name == '42login')
				login = res.sentences[0].entities[y].raw;
			y++;
		}
	find_intents(login, res, dm, rtm)
	});
}

function find_intents (login, res, dm, rtm) {

		var rep = null;
		if (login == null){
			if (res.intents[0] == 'goodbyes')
				rep = replyGoodbyes();
			else if (res.intents[0] == 'greetings')
				rep = replyGreetings();
			else if (res.intents[0] == 'help')
				rep = replyHelp();
			if (rep == null)
				rtm.sendMessage('i don\'t get it :/', dm.id);
			else
				rtm.sendMessage(rep, dm.id);
			return(0);
		}
		else
			replyBot(login, res, dm, rtm);
}

var server = http.createServer (function (req, res) {

	res.writeHead(200);
});