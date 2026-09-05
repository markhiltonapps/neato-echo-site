---
title: Choose your microphone
description: Pick which input device Neato Echo listens to, and why the built-in one is often the better choice.
---
By default Neato Echo uses whatever microphone Windows is using. If that's the
wrong one — or if you've plugged in something better — you can choose
explicitly.

## Choosing a device

Open **Settings**, then **Preferences**, and find **Input Device**.

Pick a specific microphone from the list, or leave it on **System Default** to
follow whatever Windows is set to. The app confirms the current choice
underneath — *"Using: …"* — and marks your machine's own microphone as
**(Built-in)**.

<Note>
  **System Default** follows Windows. That's convenient, but it means plugging
  in headphones or joining a call can silently change which microphone
  Neato Echo hears. If dictation works and then mysteriously stops after you
  connect something, this is the first place to look.
</Note>

## Prefer Built-in Microphone

There's a separate setting called **Prefer Built-in Microphone**, and the app is
blunt about why: *"External microphones may cause latency or reduced
transcription quality."*

That reads backwards if you've bought a good microphone, so it's worth
explaining. The problem is usually not the microphone — it's the *link*.
Bluetooth headsets in particular switch to a low-quality, low-bandwidth mode
when they're being used as an input device, which is exactly what speech
recognition is worst at. Your laptop's built-in microphone, unglamorous as it
is, is a clean wired input at full bandwidth.

Rules of thumb:

| Setup                                       | Recommendation                                                         |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| **Bluetooth headset** (AirPods and similar) | Prefer the built-in microphone. Use the headset for listening          |
| **Wired USB or XLR microphone**             | Use it — this is the case where an external device is genuinely better |
| **Wired earbuds with an inline mic**        | Either. Try both and compare                                           |
| **Laptop on its own**                       | Built-in, which is what you'll get anyway                              |

## My headset sounds thin or quiet while I dictate

This is the most common surprise, and it is worth understanding because the fix
is quick and the cause is not obvious.

**What you notice:** the moment you start dictating (or recording a meeting), the
music, video, or call you are listening to gets quieter and thinner, losing its
bass and fullness. The instant you stop, the rich sound comes back.

**Why it happens:** most headsets — Bluetooth earbuds, USB headsets, and combined
"headphones + microphone" devices like a dock headset — are a single piece of
hardware with both a speaker and a microphone. When any app opens that
microphone, the headset switches its **whole self** into a "communications" or
"headset" mode built for phone calls: mono, narrow, and quiet. It switches back
to full, rich stereo the moment the microphone is released. Neato Echo is only
turning the microphone on to hear you; the headset is the thing choosing to
downgrade its own sound while the mic is in use.

This is why it happens with plain dictation as well as meeting recording — both
open the microphone — and why changing Windows sound settings does not stop it.
It is the headset's own behavior, shared by nearly every combined headset, and
no app can override it.

**The fix: listen on one device, talk into another.** Keep enjoying audio on the
headset, but have Neato Echo listen to a *different* microphone so the headset's
mic is never opened and its sound never downgrades.

<Steps>
  <Step title="Open the microphone setting">
    **Settings**, then **Preferences**, then **Input Device**.
  </Step>
  <Step title="Pick a microphone that is not your headset">
    Choose your laptop's built-in microphone (marked **(Built-in)**, often named
    something like *Microphone Array*) instead of the headset. If you have a
    separate USB or desk microphone, that works too.
  </Step>
  <Step title="Check the level meter">
    Say a few words and watch the meter move, so you know the new microphone is
    the one being heard.
  </Step>
</Steps>

With the headset's microphone left alone, its speakers stay in full-quality
stereo the entire time you dictate or record. The built-in microphone is also
usually better for transcription anyway, for the reasons in the section above.

<Note>
  **Do not use System Default here.** If your headset is the Windows default
  device, "System Default" will keep selecting the headset's microphone and the
  downgrade will keep happening. Pick the built-in microphone explicitly.
</Note>

<Tip>
  Only affects what you *hear*, never what gets saved. The transcript and any
  recorded audio are made from the microphone and are unaffected by the
  headset's speaker downgrade — this is purely about your own listening
  experience while the mic is open.
</Tip>

## If no microphones are listed

The app will say *"No microphones were detected"* and point you at Windows
settings. That's a Windows-level problem rather than a Neato Echo one — see
[my microphone isn't working](/help/fix/microphone-not-working), which covers
the Windows microphone privacy settings.

If the list is populated but you get *"Unable to access microphone,"* it's a
permission rather than a device problem, and the same article covers it.

## Meetings use the same input

The microphone you choose here is the one used for dictation **and** for
recording your side of a meeting. Capturing the other participants is a separate
mechanism entirely — see
[capturing both sides of the call](/help/meetings/capture-both-sides).

## Related

* [My microphone isn't working](/help/fix/microphone-not-working)
* [Improve accuracy](/help/dictation/improve-accuracy)
* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
