---
id: all_variables
title: All Environment Variables
sidebar_label: Environment Variables
---

---

- [API_ID, API_HASH & SESSION](/docs/variables/mandatory_variables#obtaining-api_id--api_hash)
- [HNDLR](#hndlr)
- [BOT_USERNAME & BOT_TOKEN](#bot_username--bot_token)
- [LOG_CHANNEL](#bot_username--bot_token)
- [REDIS_URI & REDIS_PASSWORD](/docs/variables/mandatory_variables#obtaining-redis-info)
- [HEROKU_API & HEROKU_APP_NAME](#heroku_api--heroku_app_name)
- [I_DEV](#i_dev)
- [MSG_FRWD](#msg_frwd)

---

### HNDLR

This is the prefix for your Commands , use any symbol like `.`,`,`,`/`,`?`,`:` etc...

e.g: If you set `,` as HNDLR then your commands will be like `,alive` , `,ping` etc..

---

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

### LOG_CHANNEL

Log Channel is required for storing Ultroid Logs

- Create a PRIVATE GROUP
- Add @MissRose_bot and your [assistant bot](#bot_username--bot_token)
- send Command `/id`

Rose will Reply you with an ID , This can be used  for `LOG_CHANNEL` . You can remove Rose bot from there .

---

### HEROKU_API & HEROKU_APP_NAME

`HEROKU_API` & `HEROKU_APP_NAME` is required so that you can update/restart Ultroid or check dyno usage wasily with Ultroid

* __HEROKU_API :__ Sign in to your Heroku Account and go to [Account Settings](https://dashboard.heroku.com/account) , Scroll down and you will find your API Key 
* __HEROKU_APP_NAME :__ The app name you gave while deploying Ultroid

---

### I_DEV

If you want to use commands like `eval` or `bash` then Set Value `True` else `False`

Don't Use This if you are not familiar with python and linux 

---

### MSG_FRWD

Type : `Boolean`
Default : `False`

If set `True`, messeges sent to your Assistant Bot will be forwarded to you 
