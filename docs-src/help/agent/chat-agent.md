---
title: The chat agent
description: A chat window you can talk to, which can search your notes, create and edit them, check your calendar, and search the web if you've added a cloud provider key.
---
The chat agent is a conversation rather than a one-shot instruction. It opens in
an overlay above whatever you're working in, keeps its history, and can act on
your notes.

Unlike the voice agent, it doesn't type into the app you're using — the
conversation stays in its own window.

## Opening it

Set the **Chat Agent Hotkey** under **Settings** → **Hotkeys** under **App**.
The same key opens and closes the overlay.

Inside, you can type, or hold the input's speak control to talk. The placeholder
tells you which key to press.

## What it can do

The agent has tools it can use on your behalf, and it tells you which one it's
running as it goes — *"Searching notes…"*, *"Creating note…"*, and so on.

| Tool                  | What it does                                    | Available                               |
| --------------------- | ----------------------------------------------- | --------------------------------------- |
| **Search notes**      | Finds relevant notes                            | Always                                  |
| **Read note**         | Opens one note in full                          | Always                                  |
| **Create note**       | Writes a new note                               | Always                                  |
| **Update note**       | Edits an existing note                          | Always                                  |
| **List folders**      | Reads your folders, so it files things sensibly | Always                                  |
| **Copy to clipboard** | Puts text on your clipboard                     | Always                                  |
| **Web search**        | Searches the web                                | Cloud provider key set                  |
| **Calendar**          | Reads your upcoming events                      | Google or Microsoft calendar connected  |

Two of those are conditional. **Web search** only works when you've added a key
under **Cloud Providers** in Settings — the local model has no way to reach the
web on its own. **Calendar** appears only once you've connected Google Calendar
or a Microsoft calendar under **Settings → Integrations** — without one the
agent has no view of your schedule and will say so.

<Note>
  Note search runs against the notes stored on this PC, and searches your own
  notes only. Nothing is sent anywhere unless you've chosen a cloud provider
  for the chat model.
</Note>

## Conversations

Conversations are saved and you can pick one back up. **New** starts a fresh
one, which is worth doing when you change subject — a long conversation carries
its earlier context into every answer.

Any reply can be copied out with **Copy to clipboard**.

## Choosing a model

Set it under **Settings** → **Language Models** under **AI Models**, on the
**Chat** tab. By default it's the local model (**Qwen 3.5 4B** recommended); if
you've added a cloud provider key you can pick that instead. It's independent
of the voice agent's model, so you can run a larger model for conversation and
a faster one for quick voice instructions.

**System Prompt** on the same tab sets custom standing instructions for the chat
agent.

## Chat vs the voice agent

|               | Chat agent                                        | Voice agent                        |
| ------------- | ------------------------------------------------- | ---------------------------------- |
| Opens         | An overlay window                                 | Nothing — types at your cursor     |
| Keeps history | Yes                                               | No, each instruction stands alone  |
| Can use tools | Yes                                               | No                                 |
| Best for      | Working with your notes, research, back-and-forth | One-off instructions while writing |

## Related

* [The voice agent](/help/agent/voice-agent)
* [The four things your voice can start](/help/agent/voice-modes)
* [Notes](/guides/notes)
