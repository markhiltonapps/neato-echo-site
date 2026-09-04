---
title: Meeting audio isn't captured
description: Only your voice is recorded, or nothing is — the Windows audio helper, the default output device, and what to check.
---
Your meeting recording contains your side of the conversation and nothing else,
or the transcript is empty.

Capturing other people means capturing **system audio** — what your PC is
playing — which is a separate thing from your microphone, with its own
machinery.

<Note>
  Neato Echo records what your PC plays. It never joins the meeting as a bot,
  and it never records your screen.
</Note>

## How system audio is captured

System audio is captured by a bundled helper, `windows-system-audio-helper.exe`,
which needs no permission prompt and hears every application on every output
device. It requires **Windows 10 version 2004 or later**.

If the helper is missing or fails to start, Neato Echo falls back to capturing
through the browser engine, which only hears your **default output device**.
So:

* **If you can hear the meeting but Neato Echo can't**, check that the meeting
  application is playing through your default output device — not a headset
  you've selected only inside that app.
* **If you see "System audio capture failed. Continuing with microphone only"**,
  system audio capture failed entirely. Your microphone is still being recorded;
  everyone else isn't.
* **Check your antivirus hasn't quarantined the helper** — see
  [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo).

<Warning>
  **Microsoft Teams has been reported as an exception in some setups.** In
  affected cases the Teams app renders audio in a way the system-audio capture
  doesn't see, so a Teams meeting can record silence for the other participants
  without reporting an error. This doesn't match how the capture path is
  designed to work (it's meant to hear every application), so treat it as an
  open, unconfirmed issue rather than a fixed limitation. Check a short test
  recording before relying on a Teams meeting, and tell us your Teams and
  Windows versions if you hit this — that's what we need to pin it down.
</Warning>

## If recording never starts at all

That's meeting **detection** rather than audio capture:

* Check **Meeting detection** is enabled — **Settings** → **Preferences** under
  **App**, in the **Notifications** group.
* Keep talking for a few seconds. The prompt is triggered by *sustained*
  microphone activity, not by having a meeting app open, so a very short
  exchange may not reach it.
* Connect your Google or Microsoft calendar in **Integrations** if you want
  calendar-driven detection. A scheduled event doesn't depend on hearing
  anything, which makes it the most reliable trigger. See
  [Connect your calendar](/help/meetings/connect-your-calendar).
* You can always start recording by hand with the **Meeting Mode Hotkey** (set
  one in **Settings** → **Hotkeys**), or from the in-app meeting prompt — an
  always-on-top card that works with Do Not Disturb on and never appears in
  screen shares.

## FAQ

<AccordionGroup>
  <Accordion title="Do I need to tell people I'm recording?">
    Depends on where you and they are — recording laws vary and some
    jurisdictions require everyone's consent. Worth knowing before you rely on
    it.
  </Accordion>

  <Accordion title="I hear the meeting fine, so why can't Neato Echo?">
    If the bundled helper isn't running, the fallback capture path only hears
    your default output device. Check the helper hasn't been quarantined, and
    check which device the meeting app is playing through.
  </Accordion>

  <Accordion title="Can I record just my microphone?">
    Yes — that's what you get when system audio isn't available, and it's a
    valid way to work if you only need your own side.
  </Accordion>
</AccordionGroup>

## Related

* [Meeting transcription](/guides/meeting-transcription)
* [Capture both sides of a call](/help/meetings/capture-both-sides)
* [My microphone isn't working](/help/fix/microphone-not-working)
