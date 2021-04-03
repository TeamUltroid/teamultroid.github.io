---
id: all_variables
title: All Environment Variables
sidebar_label: Environment Variables
---

---

- [API_ID, API_HASH & SESSION](/docs/variables/mandatory_variables#obtaining-api_id--api_hash)
- [BOT_USERNAME & BOT_TOKEN](#bot_username--bot_token)
- [LOG_CHANNEL](#bot_username--bot_token)
- [REDIS_URI & REDIS_PASSWORD](/docs/variables/mandatory_variables#obtaining-redis-info)
- [HEROKU_API & HEROKU_APP_NAME](#heroku_api--heroku_app_name)
- [ADDONS](#addons)
- [HNDLR](#hndlr)
- [I_DEV](#i_dev)
- [PMBOT](#pmbot)

---

### HNDLR

This is the prefix for your Commands , use any symbol like `.`,`,`,`/`,`?`,`:` etc...

e.g: If you set `,` as HNDLR then your commands will be like `,alive` , `,ping` etc..

---

### ADDONS

__Type :__ `Boolean` __Default :__ `True`

__Usage :__ If set `False` Ultroid will Not clone addon plugins from [UltroidAddons](https://github.com/TeamUltroid/UltroidAddons)

---

### I_DEV

If you want to use commands like `eval` or `bash` then Set Value `True` else `False`

Don't Use This if you are not familiar with python and linux 

---

### PMBOT

Type : `Boolean`
Default : `False`

If set `True`, messeges sent to your Assistant Bot will be forwarded to you And By replying to it u can chat with them. [Example](https://t.me/UltroidUpdates/2)
