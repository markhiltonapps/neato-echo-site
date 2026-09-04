---
title: It answers me instead of typing what I said
description: You dictated a sentence and got a reply, a rewrite, or an answer to your question — here's which feature did it.
---
You dictated *"what time is the meeting tomorrow"* and instead of those words
appearing, you got an answer. Or you dictated a paragraph and what landed was a
tidied-up rewrite of it rather than what you actually said.

Three different features can process your speech, and each one has its own
switch. Working out which one is running takes a minute.

## 1. The voice agent

Neato Echo has a **voice agent**: say its name and the rest of what you say is
treated as an instruction to carry out, not words to type. The app's own
description is *"When you say 'Hey \[agent name]' followed by an instruction, the
AI executes your command — composing content, formatting text, or answering
questions — instead of transcribing."*

So a dictation that begins with the agent's name is routed to the agent. The
default name is **Assistant**; if you've renamed it to something ordinary, you
can trigger it by accident just by saying that word.

**Where to check:** **Settings** → **Language Models** under **AI Models**, then
the **Voice Agent** tab. **Enable voice agent** turns it off entirely, and
**Agent Name** is the word that triggers it.

<Tip>
  If you want to keep the agent but stop the accidents, rename it to something
  you'd never say by chance.
</Tip>

## 2. The Voice Agent hotkey

There's a **separate hotkey** for the agent, described in the app as *"Speak a
request — your AI agent types the result, not your words."* It has no default,
so it only exists if you set one.

If you used that shortcut instead of your dictation shortcut, you'll get an
answer every time. Turning off **Enable voice agent** disables this hotkey
too — they're the same feature — so if you've done that and still get
answers, the cause is something else on this page, not the toggle.

**Where to check:** **Settings** → **Hotkeys** under **App**. Compare
**Dictation Hotkey** with **Voice Agent Hotkey** and make sure they're not
similar enough to hit the wrong one.

## 3. Dictation cleanup

Separately from the agent, Neato Echo can run your transcription through the
local language model to tidy it — punctuation, filler words, obvious
mis-hearings. This is **Dictation Cleanup**, and it's what makes text come out
polished rather than verbatim.

It's **off by default** in Neato Echo, so if your words are coming back
reworded, someone switched it on. Cleanup shouldn't answer questions, but it
*is* the reason your words can come back reworded, and if you want the raw
transcription this is the switch.

**Where to check:** **Settings** → **Language Models** under **AI Models**, then
the **Dictation Cleanup** tab.

<Note>
  You can always see what was transcribed before any processing. In your
  history, each item offers **View raw transcript** and **Copy raw transcript**.
  Comparing the two tells you immediately whether the change happened during
  transcription or afterwards.
</Note>

## If you turned the agent off and it still happens

That's worth telling us about, and it's the version of this we most want to see.
Check in this order:

<Steps>
  <Step title="Confirm which hotkey you pressed">
    Turning off **Enable voice agent** disables the Voice Agent hotkey too, so
    if you're still getting answers with the toggle off, double-check you
    pressed the dictation hotkey and not the agent one.
  </Step>

  <Step title="Compare the raw transcript">
    If the raw transcript is your actual words and the final text is an answer,
    something after transcription rewrote it. If the raw transcript is already
    an answer, the request went to the agent.
  </Step>

  <Step title="Check any custom prompt">
    Agent-name detection itself runs directly against your transcript, before
    any prompt is involved — see [how naming it
    works](/help/agent/agent-name#when-the-name-counts-as-addressing-it). The
    placeholder warning in Prompt Studio is about something else: a custom
    agent or cleanup prompt that drops the agent-name placeholder can still
    behave unpredictably once the agent *is* triggered, so keep it if you've
    edited that prompt.
  </Step>

  <Step title="Send us a debug log">
    It records which path the request took. That turns this from guesswork into
    a single answer — see
    [how to send one](/troubleshooting#send-us-a-debug-log).
  </Step>
</Steps>

## FAQ

<AccordionGroup>
  <Accordion title="I want verbatim text, with no AI at all.">
    Turn off **Dictation Cleanup** and **Enable voice agent**, both under
    **Settings** → **Language Models** under **AI Models**. Transcription then
    gives you what you said.
  </Accordion>

  <Accordion title="Does the agent need an internet connection?">
    No. By default the voice agent runs on the local language model you
    downloaded in **Settings** → **Language Models** (Qwen 3.5 4B is the
    recommended one). If you've added a key under **Cloud Providers**, you can
    point it at that provider instead; the choice is on the **Voice Agent**
    tab.
  </Accordion>

  <Accordion title="Why does it happen only sometimes?">
    Because the trigger is what you said. A dictation that happens to start with
    the agent's name is routed to the agent; one that doesn't, isn't.
  </Accordion>
</AccordionGroup>

## Related

* [AI agent mode](/guides/agent-mode)
* [Naming your agent](/help/agent/agent-name)
* [The words come out wrong](/help/fix/wrong-words-or-language)
* [My hotkey doesn't work](/help/fix/hotkey-not-working)
