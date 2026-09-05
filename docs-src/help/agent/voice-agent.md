---
title: The voice agent
description: Press a key, say what you want done, and the result is typed at your cursor instead of your words.
---
The voice agent turns speech into an **instruction** rather than text. Press its
hotkey, say what you want, and what appears at your cursor is the result — a
drafted email, a rewritten paragraph, an answer.

The app sums it up as *"Speak a request — your AI agent types the result, not
your words."*

## Setting it up

**1. Give it a hotkey.** Open **Settings**, then **Hotkeys** under **App**, and
set the **Voice Agent Hotkey**. It's empty by default, so until you set one the
only way to reach the agent is by [saying its name](/help/agent/agent-name).

**2. Check it's enabled.** Open **Settings**, choose **Language Models** under
**AI Models**, then the **Voice Agent** tab. **Enable voice agent** is on by
default.

**3. Make sure a language model is downloaded.** The agent runs on the local
model from **Settings → Language Models** (**Qwen 3.5 4B** is the recommended
default). Until one is downloaded, the agent has nothing to think with.

## Two ways to start it

There is no always-on wake word — the agent only hears you while a recording is
running. There are two ways to start one:

<Steps>
  <Step title="Say its name while dictating">
    Press your **dictation** shortcut (Ctrl + Win by default), then say
    "Hey Echo" and your instruction, for example *"Hey Echo, put this in a
    list."* The app transcribes it, sees the name at the front, removes it, and
    treats the rest as an instruction. Saying "Hey Echo" on its own, with
    nothing recording, does nothing — that is the mistake most people make first.
  </Step>
  <Step title="Or give it its own key">
    Set a **Voice Agent Hotkey** in **Settings**, then **Hotkeys**. Press it,
    speak your request, and skip the name entirely. This is the quickest way once
    you use the agent often.
  </Step>
</Steps>

## Using it

Press the hotkey (or say the name while dictating) and speak. You don't need to say the agent's name first — the
hotkey already means "this is an instruction". The app's examples:

* *"Translate to Italian: I talk faster than I type"*
* *"Write a short email to my boss telling him I want a promotion, his name is
  Mark"*
* *"What is 5 × 5?"*

The result is typed wherever your cursor is, exactly like dictation — you can
use it inside an email, a document, a chat box.

## How fast it is

The agent runs a local language model, so speed depends on your PC. Two things
shape it:

* **The first request after you open the app is the slowest** — the model
  (about 2.7 GB) has to load into memory before it can answer. After that it
  stays loaded and answers are quicker.
* **Turn on GPU acceleration.** On the Home screen, click **Enable GPU** if the
  banner offers it. The model runs several times faster on a graphics card than
  on the processor, and the assistant carries more instructions than plain
  dictation, so this helps it most.

A short request on a warm model with GPU on is typically a few seconds. If it is
much slower than that, [tell us](/help/getting-help) — include your PC's
processor and graphics card.

## Editing text you've already written

Select some text first, then press the hotkey and say what you want changed —
*"make this more formal"*, *"turn this into bullet points"*, *"fix the typos"*.
The agent rewrites **the selection in place** instead of adding something new
below it.

With nothing selected, the same hotkey behaves as described above: the result
is inserted at your cursor.

## Sharing your screen as context

The agent can also look at what's on your screen, so a command can refer to
what you're looking at — *"reply to this email"*, *"explain the error on
screen"*, *"summarize this page"*.

This is **off by default**. To turn it on, open **Settings**, choose
**Language Models** under **AI Models**, then the **Voice Agent** tab, and
enable **Share screen context**. No Windows permission is needed.

When it's on, pressing the voice agent hotkey captures the display your cursor
is on and sends that image with your command. A few things worth knowing:

* The screenshot is used for that one request only. It's never saved to disk,
  never added to your notes or history, and never written to logs.
* The dictation panel itself is excluded from the capture.
* Only the voice agent hotkey captures. Ordinary dictation and saying your
  agent's name never do.
* Not every model can read images. If yours can't, the command still runs —
  just without the screenshot.

**Using a different model for screenshots.** Some people want a cheap, fast
model for everyday commands and a stronger one when an image is involved. Turn
on **Separate vision model** underneath and pick that second model; it's used
only for commands that carry a screenshot.

<Note>
  If you've added a key under **Cloud Providers** in Settings, a screenshot is
  sent to that provider along with your command whenever screen context is on.
  Keep it off if that's not something you want leaving your PC.
</Note>

## Choosing where it runs

On the **Voice Agent** tab you choose the model, independently of the ones used
for transcription and cleanup:

| Mode                | What it means                                                                  |
| ------------------- | ------------------------------------------------------------------------------ |
| **Local**           | The on-device model from **Settings → Language Models** — fully private        |
| **Cloud Providers** | OpenAI, Anthropic, Gemini, Groq or another provider, with your own API key     |

Local is the default. A model has to be chosen explicitly, and the agent won't
run until you do.

## Its instructions

**Agent prompt**, on the same tab, is the system prompt used when the agent
runs. Leave it empty and a built-in default is used. Set it if you want a
consistent tone or format across everything the agent writes.

## If nothing happens

If the agent can't run — no model chosen or downloaded, or it's switched off —
a dictation started with the voice agent hotkey comes back as **the plain
transcript**. So getting your own raw words back from that shortcut is the
signal that the agent isn't reachable, rather than that it misunderstood you.

Check, in order: **Enable voice agent** is on, and a model is selected and
downloaded.

If the agent was reachable but the request failed, you'll see an **Agent
Unavailable** notice alongside the raw transcript, so you can tell a genuine
failure apart from the agent not being set up.

And if you have screen context on but the screenshot couldn't be sent, you'll
see a **Screen Context Skipped** notice — the command still ran, just without
the image.

## Related

* [Your agent's name](/help/agent/agent-name)
* [The four things your voice can start](/help/agent/voice-modes)
* [The chat agent](/help/agent/chat-agent)
* [Your hotkeys](/help/dictation/hotkeys)
