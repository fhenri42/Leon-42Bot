# Leon-42Bot

This Secretary bot is powered by Natural Language Processsing (NLP) with [Recast.AI](https://recast.ai)
and is plugged to Slack Bot, to easily connect it to Slack applications.


## Must
* You must be a 42 student to use this bot

## Requirements
* Create an account on [Recast.AI](https://recast.ai/signup)
* Create an account on [Slack](https://slack.com/)

## Set up your Recast.AI account

##### Fork the Bot

* Log in to your Recast.AI account
* Go to [leon42bot](https://recast.ai/fhenri/leon42bot/core)
* Click on the `Fork Bot` Button

##### Get your token

* In your profile, click your forked `leon42bot`
* In the tab-menu, click on `settings`
* Here is the `request access token` you need to configure your bot!

## Set up your Slack account

##### Set the slack-bot account

* Log in to your slack team 
* Go to https://"NAME OF TEAM".slack.com/apps/new/A0F7YS25R-bots and fill the form

## Set up your 42application

* go to [42newapp](https://profile.intra.42.fr/oauth/applications/new)
* in Redirec URI enter: https://profile.intra.42.fr/

## Start your bot in local

##### Complete the config.js

* Copy your Recast.AI `request access token`
* Copy your 42key `request access token`
* Copy your 42Secret `request access token`
* Copy your Slack token `token`

```
var config = {
  api42: {
    Key: '{42-UID}',
    Secret: '{42-SECRET}'
  },
  recast: {
    route: 'https://api.recast.ai/v1/request',
    request_token: '{YOUR-TOKEN}'
  },
  slack: {
  	Token: '{SLACK-TOKEN}'
  }
};
```
##### Run

Install the dependencies

```
npm install
npm install recastai
npm install @slack/client@3.4.0
```

Run your bot

```
node bot.js
```
