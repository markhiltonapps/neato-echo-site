---
title: How meetings work
description: Record a call, get a transcript with speaker labels and a summary, and find it again afterwards.
---
Neato Echo can record a meeting, transcribe it as people talk, label who said
what, summarize it when the call ends, and save the result as a searchable
note. It doesn't join the call as a bot and nobody else sees it running.

## Start here

<CardGroup cols={2}>
  <Card title="Record a meeting" icon="microphone" href="/help/meetings/record-a-meeting">
    Start a recording, watch it transcribe, and find the note afterwards.
  </Card>

  <Card title="How detection works" icon="bell" href="/help/meetings/how-meeting-detection-works">
    What makes the take-notes prompt appear, and how to turn it off.
  </Card>

  <Card title="Speaker labels" icon="users" href="/help/meetings/speaker-labels">
    Who said what, how to correct it, and how to switch it off.
  </Card>

  <Card title="Capturing both sides" icon="volume-high" href="/help/meetings/capture-both-sides">
    Why recording other participants is separate from your microphone.
  </Card>

  <Card title="Connect your calendar" icon="calendar" href="/help/meetings/connect-your-calendar">
    Google or Microsoft calendar: titled notes, attendee lists, and one-click join.
  </Card>
</CardGroup>

## How it works, briefly

You start a recording from the prompt Neato Echo shows you when it notices a
meeting app such as Zoom, Teams or Google Meet, from the **Note Recording**
view, or with the **Meeting Mode Hotkey** once you've set one in
**Settings → Hotkeys**. It captures your microphone and, through a bundled
Windows audio helper, the audio your PC is playing, which is how the other
participants get recorded. Text appears live. Speaker labels are assigned as it
goes and refined once the call ends. The finished note lands in your
**Meetings** folder.

## Summaries

When a recording ends, a **Summary** dialog offers a set of presets that shape
the summary to the kind of call it was:

* **Team Meeting**
* **Interview**
* **Sales Call**
* **One-on-one**
* **Customer Support**

Pick one and the local language model writes the summary into the note, with
the transcript kept underneath. You can add your own presets if the built-in
ones don't fit how you work.

## Its own transcription engine

Meeting recording keeps its own transcription engine, set on the
**Note Recording** tab of **Settings → Speech-to-Text**. Parakeet is the
default; you can pick a different local model for meetings than the one you
dictate with.

## When something's wrong

* [Meeting audio isn't captured](/help/fix/meeting-audio-not-captured): you got
  your own voice and nobody else's
* [My microphone isn't working](/help/fix/microphone-not-working)
* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
