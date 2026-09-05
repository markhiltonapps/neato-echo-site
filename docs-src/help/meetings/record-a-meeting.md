---
title: Record a meeting
description: Start a meeting note by hand or from a prompt, watch it transcribe live, pick a summary, and find it afterwards.
---
A meeting note records the call, transcribes it as people talk, and saves the
whole thing as a note you can search later. You can start one from the prompt
Neato Echo shows you, or start it yourself at any time.

## Start one yourself

Press your **Meeting Mode Hotkey**. That opens meeting mode and begins a note
straight away — useful when the prompt didn't appear, or when you're recording
something that isn't a call at all, like a lecture or an interview.

Setup asks for the meeting hotkey right after your dictation shortcut, and
recommends **Ctrl + Alt + M**. To change it later, open **Settings**, then
**Hotkeys**, and look for **Meeting Mode Hotkey**. The same panel has a
**When triggered by hotkey, open in:** choice — **Full width** or
**Side panel** — which decides how the meeting view appears when you use the
shortcut.

## Start one from the prompt

When Neato Echo thinks a meeting has started, a card appears asking whether you
want to take notes. Choose **Take notes** and recording begins.

If the prompt came from a calendar event with a meeting link, the button reads
**Join & transcribe** instead — that opens the meeting and starts the note in
one go.

The card is drawn by Neato Echo rather than Windows, so it still reaches you
when Do Not Disturb or Focus Assist is on. It's also excluded from screen
capture, so it won't show up in a share or a recording.

[How meeting detection decides](/help/meetings/how-meeting-detection-works)
covers what triggers that prompt and how to turn it off.

## While it's recording

Text appears as people speak. A pill sits at the top of the transcript with the
recording controls, and if Neato Echo is still waiting on your microphone it
says so — **Waiting for microphone** — rather than failing quietly.

Speaker labels are assigned live and tidied up once the call ends, so don't
worry if they look rough mid-meeting. The app tells you as much:
*"Still identifying speakers. Labeling accuracy will improve once the call
ends."* See [speaker labels](/help/meetings/speaker-labels).

<Note>
  Recording your own microphone is not the same as recording the people on the
  call. The other side comes from your PC's system audio, captured by a helper
  bundled with Neato Echo — see
  [capturing both sides of the call](/help/meetings/capture-both-sides).
</Note>

## Watch the words arrive

While a recording runs, the transcript fills in as people speak. With the streaming speech model (the one setup picks for English), words appear almost as they are said, which helps when someone speaks quickly or with an accent you are following. With other models the transcript updates every few seconds instead.

<Tip>
  On an older or slower PC, live transcription can push the processor hard during a long call. Turn it off under **Settings**, **Speech-to-Text**, **Note Recording**, **Live transcript while recording**; the transcript then updates in short steps and the recording uses less CPU.
</Tip>

## Choose a summary

When you stop the recording, a **Summary** dialog appears asking what kind of
meeting it was. Pick the preset that fits and Neato Echo writes a summary
shaped for it:

| Preset               | Good for                                        |
| -------------------- | ----------------------------------------------- |
| **Team Meeting**     | Stand-ups, planning sessions, project check-ins |
| **Interview**        | Candidate or research interviews                |
| **Sales Call**       | Discovery and demo calls with prospects         |
| **One-on-one**       | Manager and report catch-ups                    |
| **Customer Support** | Support and troubleshooting calls               |

If none of them fits the way you work, add your own preset from the same
dialog. It's kept alongside the built-in ones for next time.

Summaries are written by the local language model you've downloaded in
**Settings → Language Models**, so the transcript stays on your PC.

## Where the note ends up

Meeting notes are saved into your **Meetings** folder automatically. If the
prompt came from a calendar event, the note takes that event's title; otherwise
it starts as **New note** and you can rename it.

From there it behaves like any other note — editable, searchable, and available
to the AI actions that clean up or summarize it.

## Choosing how meetings get transcribed

Meeting recording keeps its **own** engine setting, separate from dictation.
Open **Settings**, then **Speech-to-Text**, and pick the **Note Recording**
tab:

| Mode                | What it means                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| **Local**           | On-device models, fully private. The default is NVIDIA Parakeet (Parakeet TDT 0.6B v3)               |
| **Cloud Providers** | Bring your own API key (OpenAI, Groq, Gemini, Mistral, Anthropic and others). Optional, off by default |

Changing this tab changes meetings only. Your dictation engine and your audio
upload engine are set on their own tabs and are unaffected.

## Related

* [How meeting detection works](/help/meetings/how-meeting-detection-works)
* [Speaker labels](/help/meetings/speaker-labels)
* [Capturing both sides of the call](/help/meetings/capture-both-sides)
* [Connect Google or Microsoft calendar](/help/meetings/connect-your-calendar)
* [Meeting audio isn't being captured](/help/fix/meeting-audio-not-captured)
