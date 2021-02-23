---
id: mandatory_variables
title: Mandatory variables to run Ultroid.
sidebar_label: Mandatory Variables
---
Ultroid needs five mandatory variables to run

- `API_ID`
- `API_HASH`
- `SESSION`
- `REDIS_URI`
- `REDIS_PASSWORD`


### Obtaining API_ID & API_HASH

1. Visit [my.telegram.org](https://my.telegram.org)
2. Enter your phone number in [international format](https://telegram.org/faq#login-and-sms). Example : `+9199966XYYYY`
3. Enter the web login code sent to you by Telegram in app.
4. After successful sign in , Click on `API development tools`
5. Fill `App Title` & `Short name` and create app.

![app_id_and_short_code](https://telegra.ph/file/375ec338bc92a1119d390.jpg)

6. Yay, you got your `API_ID` & `API_HASH`

![api_id_and_api_hash](https://telegra.ph/file/6e1c7b54d547b2dc7419a.jpg)

### Obtaining SESSION

There are three ways by which you can get your SESSION.

1. Via terminal.
`(. <($(which curl>/dev/null&&echo curl -Ls||echo wget -qO-) https://del.dog/ultroid))`
Now follow the on-screen instructions.

2. Via [repl.it](https://repl.it/@TeamUltroid/UltroidStringSession#main.py)

4. Via bot.
Use [@SessionStringBot](https://t.me/SessionStringBot). (not recommended, will die soon.)

3. For the ones who deployed locally.
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
