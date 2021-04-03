---
id: mandatory_variables
title: Mandatory variables to run Ultroid.
sidebar_label: Mandatory Variables
---
Ultroid needs eight mandatory variables to run

- `API_ID`
- `API_HASH`
- `SESSION`
- `REDIS_URI`
- `REDIS_PASSWORD`
- `BOT_USERNAME`
- `BOT_TOKEN`
- `LOG_CHANNEL`

### Obtaining API_ID & API_HASH

1. Visit [my.telegram.org](https://my.telegram.org)
2. Enter your phone number in [international format](https://telegram.org/faq#login-and-sms). Example : `+9199966XYYYY`
3. Enter the web login code sent to you by Telegram in app.
4. After successful sign in , Click on `API development tools`
5. Fill `App Title` & `Short name` and create app.

![app_id_and_short_code](https://telegra.ph/file/375ec338bc92a1119d390.jpg)

6. Yay, you got your `API_ID` & `API_HASH`

![api_id_and_api_hash](https://telegra.ph/file/6e1c7b54d547b2dc7419a.jpg)

Or Use can use [@apiscrapperbot](https://t.me/apiscrapperbot).  (not recommended, will die soon.)

### Obtaining SESSION

There are three ways by which you can get your SESSION.

1. Via terminal.
`(. <($(which curl>/dev/null&&echo curl -Ls||echo wget -qO-) https://del.dog/ultroid))`
Now follow the on-screen instructions.

2. Via termux.
`sh -c "$(curl -fsSL https://da.gd/termux-tel)"`

3. Via [repl.it](https://repl.it/@TeamUltroid/UltroidStringSession#main.py)

4. Via bot.
Use [@SessionStringBot](https://t.me/SessionStringBot). (not recommended, will die soon.)

5. For the ones who deployed locally.
`bash sessiongen`

### Obtaining REDIS Info

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

You can get a free REDIS db from [redislabs.com](https://redislabs.com)

- Login/Register a free account in [RedisLabs](https://redislabs.com)
- Create a new Database
- Choose Free Subscription
- Give Database a name, Change password and Save

Go to the Configuration

![redis_db](https://telegra.ph/file/d4ede025f65fa97957f66.png)

- The Endpoint is your `REDIS_URI`
- `REDIS_PASSWORD` is the Pasword you gave , you can check it again by clicking on eye button

[YouTube Redis Tutorial](http://youtu.be/jpUdcH9cjIo)

### LOG_CHANNEL

Log Channel is required for storing Ultroid Logs

- Create a PRIVATE GROUP
- Add @MissRose_bot and your [assistant bot](#bot_username--bot_token)
- send Command `/id`

Rose will Reply you with an ID , This can be used  for `LOG_CHANNEL` . You can remove Rose bot from there .

### BOT_USERNAME & BOT_TOKEN

A Telegram bot is required by Ultroid for various resons like - helpmenu .

To get this Visit [Botfather](https://telegram.dog/botfather) (@BotFather) in telegram

- Start Botfather
- Send Command `/newbot`
- Send a name for your bot
- Choose a username for your bot (must end with `bot` . e.g: ultroidbot,ultroid_bot)

Now Botfather will provide you the Access Token for your bot. `BOT_TOKEN` is this Access Token and `BOT_USERNAME` is the username you sent 

Use `@` at the beginning while setting ENV Vars

:::note
Make Sure `Inline Mode` is turned on, Bot is added in `LOG_CHANNEL` and can send messages there
:::

---

Mandatory If only u deploying on Heroku.

- `HEROKU_APP_NAME`
- `HEROKU_API`

### HEROKU_API & HEROKU_APP_NAME

`HEROKU_API` & `HEROKU_APP_NAME` is required so that you can update/restart Ultroid or check dyno usage wasily with Ultroid

* __HEROKU_API :__ Sign in to your Heroku Account and go to [Account Settings](https://dashboard.heroku.com/account) , Scroll down and you will find your API Key 
* __HEROKU_APP_NAME :__ The app name you gave while deploying Ultroid


