---
id: pyUltroid
title: pyUltroid
sidebar: pyUltroid
slug: /pyUltroid
---

# py-Ultroid Library

A stable userbot base library, based on Telethon.

[![PyPI - Version](https://img.shields.io/pypi/v/py-Ultroid?style=for-the-badge)](https://pypi.org/project/py-Ultroid)
[![PyPI - Downloads](https://img.shields.io/pypi/dm/py-Ultroid?label=DOWNLOADS&style=for-the-badge)](https://pypi.org/project/py-Ultroid)

## Installation
`pip install py-Ultroid`

## Usage
=> Create folders named `plugins`, `addons`, `assistant` and `resources`.<br/>
=> Add your plugins in the `plugins` folder and others accordingly.<br/>
=> Create a `.env` file with
- `API_ID`
- `API_HASH`
- `SESSION`
- `BOT_TOKEN`
- `BOT_USERNAME`
- `REDIS_URI`
- `REDIS_PASSWORD`
- `LOG_CHANNEL` as mandatory environment variables.
Check [`.env.sample`](https://github.com/TeamUltroid/Ultroid/.env.sample) for more details.<br/>
=> Run `python -m pyUltroid` to start the bot.<br/>

### Creating plugins
To work everywhere

```python
@ultroid_cmd(
    pattern="start",
)   
async def _(e):   
    await eor(e, "Ultroid Started")   
```

To work only in groups

```python
@ultroid_cmd(
    pattern="start",
    groups_only=True,
)   
async def _(e):   
    await eor(e, "Ultroid Started")   
```

Assistant Plugins 👇

```python
@asst_cmd("start")   
async def _(e):   
    await e.reply("Ultroid Started")   
```

---
