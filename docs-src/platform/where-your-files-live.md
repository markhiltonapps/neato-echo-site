---
title: Where your files live
description: Every folder Neato Echo writes to on Windows — settings, the notes database, logs, downloaded models and note files.
---
Neato Echo keeps everything in two places: an application-data folder for your
settings and notes, and a cache folder for downloaded models. Both are inside
your user account, so nothing needs administrator access to read or remove.

## Application data

Your settings, dictation history, notes, logs and any saved audio live in:

```
%APPDATA%\Neato Echo
```

Paste that into the File Explorer address bar to open it. Inside:

| Item                | What it is                                                           |
| ------------------- | -------------------------------------------------------------------- |
| `transcriptions.db` | An ordinary SQLite database holding your history and notes           |
| `logs/`             | Log files — the thing to attach when you report a problem            |
| `audio/`            | Recordings kept by your audio-retention setting                      |

<Warning>
  Deleting this folder resets Neato Echo completely: settings, history and
  every note. Nothing is backed up anywhere else, so export what you want to
  keep first.
</Warning>

## Downloaded models

Speech and language models are downloaded on first use and cached outside the
application-data folder, so you can reclaim the space without losing settings:

```
%USERPROFILE%\.cache\neato-echo
```

Whisper models sit in `whisper-models/` inside it; Parakeet and the other
engines, and the language models, have folders of their own. Deleting anything
here is safe — the app re-downloads what it needs next time you select it.

You don't have to do it by hand: **Settings** → **System** → **Data
Management** → **Model cache** has **Open**, which shows you the folder, and
**Clear cache**, which empties it. **Reset app data** in the same section is the
bigger hammer — it deletes local settings, transcriptions, recordings and
models together.

Uninstalling Neato Echo leaves both folders in place. Delete them yourself if
you want a clean slate — [Windows](/platform/windows) has the commands.

## Note files, if you turned them on

**Save notes as files** (under **Settings** → **Preferences** under **App**)
mirrors your notes as Markdown into a folder you choose. It's off until you
turn it on, and the location is entirely yours — the app writes into it and
nothing else does.

That folder is also the Obsidian answer: point it at a vault and your notes
appear there as ordinary Markdown. [Export your
notes](/help/notes/export-your-notes) covers the detail.

## Credentials

API keys for optional cloud providers aren't in either folder as plain text.
They're encrypted through Windows' own credential protection (DPAPI) and stored
as encrypted files under the application-data folder. [How Neato Echo is
secured](/help/privacy/how-neato-echo-is-secured) has the detail.

## Backing up

If you want a copy of everything, take the application-data folder while
Neato Echo is closed. Copying `transcriptions.db` while the app is running can
catch it mid-write.

The models cache isn't worth backing up — it re-downloads.

## Related

* [What is stored and for how long](/help/privacy/what-we-store-and-for-how-long)
* [Where your data goes](/help/privacy/where-your-data-goes)
* [Updates and reinstalling](/help/fix/updates-and-reinstalling)
