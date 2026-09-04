---
title: Capturing both sides of the call
description: Why recording the other participants is separate from recording your microphone, and what Neato Echo does and doesn't capture.
---
A meeting recording has two halves: your voice, from your microphone, and
everyone else's, from what your PC is playing. They're captured by different
means and they can fail independently — which is why a recording sometimes
contains only you.

## What Neato Echo captures

**Your microphone**, and **system audio** — the sound your PC plays. Together
those cover both sides of a call.

What it does **not** do:

* It never **joins the meeting as a bot**. Nobody sees an extra participant, and
  there's nothing for a host to admit.
* It never **records your screen**. Only the audio is taken.
* It doesn't need the meeting platform's own recording to be running, and it
  doesn't ask the host for permission.

## How system audio is captured

There's no permission to grant. A small audio helper bundled with Neato Echo
captures what your PC is playing, so the other side of the call is picked up
without any prompt from Windows. It needs **Windows 10 version 2004 or later**;
Windows 11 is fine.

The step-by-step for when it fails is in
[meeting audio isn't captured](/help/fix/meeting-audio-not-captured).

## Echo, and why you don't hear yourself twice

Your microphone picks up your speakers as well as your voice, so a naive
recording captures everyone else twice — once from system audio, once bleeding
back through your mic. Neato Echo runs echo cancellation to remove that bleed,
and drops duplicated phrases when merging the two sources.

You don't need to configure this. It's worth knowing because it explains why a
transcript doesn't repeat every sentence, and why using headphones — which
removes the bleed at source — tends to give the cleanest result.

## Recording only your own side

If system audio isn't available, recording still works; you just get your half.
That's a legitimate way to work if you only need your own contributions, and
speaker labels will fall back to "You" and "Them".

<Note>
  **Check before you rely on it.** If a recording matters, start one, say a few
  words, have someone else say a few, and stop. Ten seconds tells you whether
  both sides are landing — and there is one known case, Microsoft Teams, where
  the other side can come through silent without any error. That case is
  documented in
  [meeting audio isn't captured](/help/fix/meeting-audio-not-captured).
</Note>

## Telling people you're recording

Recording laws vary by country and state, and some require the consent of
everyone on the call rather than just you. Neato Echo doesn't announce itself to
other participants, so whether and how to tell them is your call to make.

## Related

* [Meeting audio isn't captured](/help/fix/meeting-audio-not-captured)
* [Record a meeting](/help/meetings/record-a-meeting)
* [Speaker labels](/help/meetings/speaker-labels)
* [Where your data goes](/help/privacy/where-your-data-goes)
