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

---

## HNDLR

This is the prefix for your Commands , use any symbol like `.`,`,`,`/`,`?`,`:` etc...

e.g: If you set `,` as HNDLR then your commands will be like `,alive` , `,ping` etc..

---

## BOT_USERNAME & BOT_TOKEN

A Telegram bot is required by Ultroid for various resons like - helpmenu .

To get this Visit [Botfather](https://telegram.dog/botfather) (@BotFather) in telegram

- Start Botfather
- Send Command `/newbot`
- Send a name for your bot
- Choose a username for your bot (must end with `bot` . e.g: ultroidbot,ultroid_bot)

Now Botfather will provide you the Access Token for your bot. `BOT_TOKEN` is this Access Token and `BOT_USERNAME` is the username you sent 

Use `@` at the beginning while setting ENV Vars

:::note
Make Sure `Inline Mode` is turned on
:::

---

## LOG_CHANNEL

Log Channel is required for storing Ultroid Logs

- Create a PRIVATE GROUP
- Add @MissRose_bot
- send Command `/id`

Rose will Reply you with an ID , This can be used  for `LOG_CHANNEL` . You can remove Rose bot from there .

---

## I_DEV

If you want to use commands like `eval` or `bash` then Set Value `True` else `False`

Don't Use This if you are not familiar with python and linux 

---

