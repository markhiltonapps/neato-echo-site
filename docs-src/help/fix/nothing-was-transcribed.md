---
title: Nothing was transcribed
description: What "No Audio Detected" means, why an empty result happens, and how to get the take back.
---
You spoke, and either a **No Audio Detected** notice appeared — *"The recording
contained no detectable audio"* — or the dictation finished and produced
nothing at all.

Both mean the same thing from the app's side: no words came out of the audio it
had. That happens for a small number of reasons, and they're quick to separate.

<Note>
  **First, before you re-record anything:** if history is on, your audio is still
  on disk and you can transcribe it again without repeating yourself. See
  [I lost a dictation](/help/fix/recover-a-lost-dictation).
</Note>

## Quick checks

<Steps>
  <Step title="Check the right microphone is being used">
    The most common cause by far. Your PC may have switched inputs — to a
    headset that isn't on your head, or to a monitor's built-in mic across the
    room. Open **Settings**, choose **Privacy & Data** under **System**, and
    look at the **Permissions** section to confirm the microphone is allowed;
    then check which input device Windows has selected.

    Full walkthrough: [My microphone isn't working](/help/fix/microphone-not-working).
  </Step>

  <Step title="Watch the level while you speak">
    Start a dictation and speak normally. If the app shows no movement at all,
    the audio never reached it and the problem is the device or the permission,
    not the transcription.
  </Step>

  <Step title="Speak a little longer">
    Very short takes — a word or two, or a hotkey pressed and released almost
    immediately — often contain too little speech to produce a result. Try a
    full sentence.
  </Step>

  <Step title="Try a different engine">
    If you're on the default Parakeet model, try a Whisper model (Base is a
    quick test), or the other way around. Whichever one works tells you where
    the problem is.

    The engine is set **per mode** — dictation, note recording and audio upload
    each have their own. Open **Settings**, choose **Speech-to-Text** under
    **AI Models**, and use the **Dictation** tab for dictation.
  </Step>
</Steps>

## If your microphone was fine

A few situations produce a genuinely empty result even though audio was
captured:

* **The recording was silent or nearly silent.** A muted headset, a hardware
  mute switch, or an input whose level is at zero. Debug logs record the measured
  level for exactly this reason.
* **Another app had exclusive hold of the microphone.** Conferencing apps are
  the usual ones. Quit it and try again.
* **The audio wasn't speech.** Background noise on its own generally produces
  nothing rather than nonsense, which is the intended behavior.

## Get us the log

This is the case where a debug log settles it in one round instead of several.
It records the audio level the app measured, so it distinguishes "the microphone
sent silence" from "the microphone sent nothing" from "transcription ran and
returned empty" — three different fixes that look identical from the outside.

[How to send us a debug log](/troubleshooting#send-us-a-debug-log)

## FAQ

<AccordionGroup>
  <Accordion title="Is my recording gone?">
    Usually not. History is on by default and audio is kept for 30 days, so you
    can re-transcribe it — see [I lost a dictation](/help/fix/recover-a-lost-dictation).
    The exception is a dictation you cancelled with Escape, which isn't kept
    unless you've turned that on.
  </Accordion>

  <Accordion title="It worked yesterday and doesn't today.">
    Check whether your default input device changed — plugging in headphones,
    docking a laptop, or joining a call can move it. Also check that nothing
    changed in **Windows Settings → Privacy & security → Microphone**; see
    [My microphone isn't working](/help/fix/microphone-not-working).
  </Accordion>

  <Accordion title="I get partial text, not nothing.">
    That's a different problem — see
    [The words come out wrong](/help/fix/wrong-words-or-language).
  </Accordion>
</AccordionGroup>

## Related

* [My microphone isn't working](/help/fix/microphone-not-working)
* [I lost a dictation](/help/fix/recover-a-lost-dictation)
* [Local transcription isn't working](/help/fix/local-transcription-not-working)
