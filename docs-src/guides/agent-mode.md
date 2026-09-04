---
title: AI agent
description: Speak an instruction instead of text, or open a chat that can work with your notes.
---
Neato Echo has an AI agent you reach two different ways, depending on what you
want:

* **The voice agent** types the *result* of an instruction at your cursor. Say
  "write a short thank-you note" and the note appears.
* **The chat agent** opens a conversation window that can search your notes,
  write and edit them, read your connected calendars, and search the web if
  you've added a cloud provider key.

They share settings but behave quite differently.

<CardGroup cols={2}>
  <Card title="The voice agent" href="/help/agent/voice-agent">
    Press a key, speak an instruction, get the result typed at your cursor.
  </Card>

  <Card title="The chat agent" href="/help/agent/chat-agent">
    A conversation overlay with tools that work on your notes.
  </Card>

  <Card title="Your agent's name" href="/help/agent/agent-name">
    Saying its name during dictation hands the rest over to the agent.
  </Card>

  <Card title="Which mode is running?" href="/help/agent/voice-modes">
    Dictation, agent, translation and meetings, told apart.
  </Card>
</CardGroup>

## Two ways to reach the voice agent

This is the part that surprises people. The voice agent runs when either:

1. You press the **Voice Agent Hotkey**, or
2. You **say the agent's name** at the start of an ordinary dictation.

The second is on by default, and the default name is **Assistant**, so it's
possible to trigger the agent without meaning to. [Your agent's
name](/help/agent/agent-name) covers how the detection works and how to rename
or disable it.

## Where the settings live

Everything except the hotkeys is under **Settings** → **Language Models** under
**AI Models**:

| Tab             | Controls                                        |
| --------------- | ----------------------------------------------- |
| **Voice Agent** | Enable it, name it, choose its model and prompt |
| **Chat**        | The chat agent's model and system prompt        |

The hotkeys themselves are under **Settings** → **Hotkeys** under **App**.
**Voice Agent Hotkey** and **Chat Agent Hotkey** are separate entries, and both
are unset until you choose them.

## Where it runs

By default both agents run on the local language model you downloaded during
setup (Qwen 3.5 4B is the recommended one; smaller Qwen sizes are available in
**Settings → Language Models** for lower-end PCs). Everything stays on your
machine.

If you'd rather use a hosted model, add your own API key under **Cloud
Providers** in Settings (OpenAI, Anthropic, Gemini, Groq and others) and choose
it for the agent. See [cloud vs local](/guides/cloud-vs-local).

## Related

* [It answers me instead of typing](/help/fix/it-answers-instead-of-typing)
* [How dictation works](/guides/dictation)
