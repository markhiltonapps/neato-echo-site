---
title: How meeting detection works
description: What makes the take-notes prompt appear, why it sometimes doesn't, and how to turn it off.
---
Neato Echo watches for the start of a meeting and offers to take notes. It's on
by default. Nothing is recorded until you accept the prompt.

## What actually triggers the prompt

Two things:

| Signal                            | What it is                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sustained microphone activity** | You've been talking for long enough that it looks like a call rather than a stray noise. This is what catches browser meetings — Google Meet, or anything running in a tab |
| **A calendar event**              | If you've connected a Google or Microsoft calendar, an event with a start time coming up produces a prompt shortly before it begins                                        |

Both land in the same place, so overlapping signals give you **one** prompt
rather than several.

<Note>
  Neato Echo also notices when Zoom, Microsoft Teams or Webex are running, but
  that on its own does **not** produce a prompt — it's only used as context.
  Having Zoom open in the background all day won't nag you.
</Note>

## When the prompt says different things

The wording follows what Neato Echo knows:

* **"It sounds like you're in a meeting."** — detected from your microphone
* **"Your meeting is starting."** — a calendar event about to begin
* **"It sounds like your meeting is underway."** — a calendar event already in progress

When the event carries a meeting link, the button becomes **Join & transcribe**
and opens the call for you.

## When it stays quiet on purpose

The prompt is suppressed when it would be unwelcome or redundant:

* You're **already recording** a meeting
* You're **mid-dictation** — the prompt waits rather than interrupting you, and
  arrives once you've finished
* There's a short **cool-down** after you finish a recording, so ending one call
  doesn't immediately prompt you about the same audio
* You already **dismissed** that particular detection

## Turning it off

Open **Settings**, then **Preferences**, and find **Notifications**. Two
separate switches:

| Setting                | Controls                                           |
| ---------------------- | -------------------------------------------------- |
| **Meeting detection**  | The prompt triggered by microphone activity        |
| **Calendar reminders** | The prompt triggered by an upcoming calendar event |

They're independent, so you can keep calendar reminders and drop the microphone
prompts, or the reverse. **Disable all notifications** in the same group
silences both — along with everything else except error messages.

Switching the prompt off doesn't remove the feature — you can still start a
meeting note whenever you like with the
[Meeting Mode Hotkey](/help/meetings/record-a-meeting).

## If you never get a prompt

Work through these in order:

1. **Check the switches above.** Both are on by default, but they're the first
   thing to rule out.
2. **Talk for a bit longer.** Microphone detection waits for *sustained* audio
   deliberately — a one-line "can you hear me?" may not be enough.
3. **Check your microphone is the one being used.** If Neato Echo is listening
   to a device you aren't speaking into, it hears nothing. See
   [choose your microphone](/help/customize/choose-your-microphone).
4. **Connect your calendar** if your meetings are scheduled. Calendar events
   don't depend on hearing anything at all, which makes them the most reliable
   trigger — see
   [connect Google or Microsoft calendar](/help/meetings/connect-your-calendar).

If it still never fires, start the note by hand with the Meeting Mode Hotkey
and [tell us](/help/getting-help) — that's a bug worth hearing about.

## Related

* [Record a meeting](/help/meetings/record-a-meeting)
* [Connect Google or Microsoft calendar](/help/meetings/connect-your-calendar)
* [Meeting audio isn't being captured](/help/fix/meeting-audio-not-captured)
