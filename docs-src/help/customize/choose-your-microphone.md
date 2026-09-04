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
