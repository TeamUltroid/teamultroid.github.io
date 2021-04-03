---
id: redis_vars
title: Redis Variables used By Ultroid
sidebar_label: Redis Variables
---

### ALIVE_PIC

This Variable used to store `alive` message media , You can set `direct url` or `bot file api id`

### ALIVE_TEXT

Stores text to show in `alive` command

### AUTOAPPROVE

Value Type : `Boolean`

If `AUTOAPPROVE` is set to True then it will automatically approve users in PM if you send any msg to user . Else if set `False` , you need to approve user manually

### HNDLR

Default : `.`

You can change command handler prefix using this variable.

### PMSETTING

Default : `False`

This variable is used to toggle `PMPERMIT` . PM PERMIT is on when value is set to `True`

### PMPIC

You can customize PM Permit default media using this variable . You can store direct links or file id to customize media.

### PMPERMIT

It stores the list of approved users of PM Permit

### SUDOS 

This variable stores the list of SUDO User's ids

### language

Stores the default language for Ultroid