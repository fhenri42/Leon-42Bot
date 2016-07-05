var config = require('../config.js');

function replyBot (login, res, dm, rtm){

	if (login) {
		
		var request = require('request');
		var user;
		var OAuth = require('oauth');
		var OAuth2 = OAuth.OAuth2;    
		var key = config.api42.Key;
		var Secret = config.api42.Secret;
		var oauth2 = new OAuth2(key,Secret, 'https://api.intra.42.fr/', null, 'oauth/token',null);
		oauth2.getOAuthAccessToken('',{'grant_type':'client_credentials'}, function(e, access_token, refresh_token, results){

			var token = access_token;
			var options ={"url": 'https://api.intra.42.fr/v2/users/' + login , "headers": {"Authorization" : 'bearer ' + token }}
			request(options, function (error, response, body){

				user = JSON.parse(body);
				if (!user.cursus){
					if (res.sentences[0].type != null){
						if (res.intents[0] == 'find')
							rtm.sendMessage("Location of "+ login +"  :" + user.location, dm.id);
						if (res.intents[0] == 'information')
							rtm.sendMessage( login + " :\n" + user.displayname, dm.id);
						if (res.intents[0] == 'email')
							rtm.sendMessage( "you can contact " + login + " by email:  " + user.email, dm.id);
						if (res.intents[0] == 'phonenumber')
							rtm.sendMessage( "you can contact " + login + " by phone:  " + user.phone, dm.id);
						if (res.intents[0] == 'level'){
							if (user.cursus[1] == null)
								rtm.sendMessage( login + "have currrently no cursus in 42",dm.id);
							else
								rtm.sendMessage( login + " is lvl: " + String(user.cursus[1].level), dm.id);
						}
					}
				}
				else
					rtm.sendMessage("i'am sorry but, "+ login +" is not a 42 students, try again.",dm.id);
				});
		});
	}
}
module.exports = replyBot;