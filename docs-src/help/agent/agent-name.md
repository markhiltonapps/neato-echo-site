---
title: Your agent's name
description: Saying your agent's name during dictation hands the rest over to the agent. How that's detected, and how to rename or switch it off.
---
Your voice agent has a name, and saying it at the start of a dictation is one of
the two ways to reach the agent. The app puts it plainly: *"When you say 'Hey
\[name]' followed by an instruction, the AI executes your command — composing
content, formatting text, or answering questions — instead of transcribing it
verbatim."*

The name is removed from what gets typed, so you don't see it in the output.

## The default is "Assistant"

Out of the box your agent is called **Assistant**, and the feature is **on**.

That combination is worth knowing about, because "assistant" is an ordinary
word you might genuinely dictate — describing a colleague's role, writing about
a tool you use. If a dictation *starts* with it, it goes to the agent.

<Tip>
  If you use the agent, rename it to something you would never say by accident —
  the app suggests names like Jarvis, Nova, or Atlas. If you don't use it,
  switch it off. Either one removes the surprise.
</Tip>

## When the name counts as addressing it

Not every mention triggers the agent. The name only counts when it's genuinely
being addressed, which means one of:

* It's the **first thing** in the dictation.
* It **follows a greeting** — *hey*, *hi*, *hello*, *ok*, *okay*, *yo*, or
  *please*.
* It **starts a new sentence**, after a full stop, question mark, or exclamation
  mark.

A mention anywhere else is treated as ordinary text. Dictating *"I asked my
assistant to book it"* types that sentence — the name is in the middle, so it's
content, not a command.

## Near-misses count too

Speech-to-text doesn't always hear a name cleanly, so matching is deliberately
forgiving — it allows for a small number of wrong letters, and for the name
being split into two words.

Longer names get slightly more tolerance than short ones. Names of one character
are ignored entirely.

The trade-off is intentional: it means the agent answers when you address it
slightly imprecisely, at the cost of occasionally triggering on something close.

## Changing the name

1. Open **Settings**, choose **Language Models** under **AI Models**, then the
   **Voice Agent** tab.
2. Type a new name in **Agent Name**.
3. Click **Save**.

You'll get a confirmation telling you the new name and how to address it. Pick
something *"short and natural to say aloud"* — the app's own advice, and good
advice, since you have to say it out loud mid-sentence.

Renaming also adds the new name to your custom dictionary, so it's transcribed
reliably.

## Switching it off

On the same tab, turn off **Enable voice agent**. That stops the name trigger
completely — dictation is then always transcribed.

<Note>
  Switching it off here also disables the agent reached by the **Voice Agent
  Hotkey**, since they're the same feature. If you want to keep the hotkey and
  only lose the name trigger, rename the agent to something you'd never say
  instead of turning it off.
</Note>

## Related

* [The four things your voice can start](/help/agent/voice-modes)
* [The voice agent](/help/agent/voice-agent)
* [It answers me instead of typing](/help/fix/it-answers-instead-of-typing)
* [Custom dictionary](/help/customize/custom-dictionary)
