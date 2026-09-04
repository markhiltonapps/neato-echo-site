---
title: Local transcription isn't working
description: Parakeet or Whisper failing on your own PC — models, GPU acceleration, and the per-mode setting people miss.
---
Transcription fails or produces nothing, even though the model is downloaded.

<Warning>
  **Check this first.** The transcription engine is set **per mode**. Dictation,
  note recording and audio upload each have their own tab — so changing the
  engine for one leaves the others exactly where they were.

  **Settings** → **Speech-to-Text** under **AI Models**, then the tab for the
  mode you're actually using: **Dictation**, **Note Recording** or **Audio
  Upload**.

  A model you downloaded while on the **Dictation** tab is on disk for all
  three, but it still has to be *selected* on the other tabs. If you switched
  engines — say from Parakeet to Whisper — and note recording or uploads then
  stopped working, this is almost always why.
</Warning>

## Quick checks

<Steps>
  <Step title="Confirm a model is downloaded">
    Local transcription needs the model on disk. The model picker shows which
    are installed. If a download failed, or a model shows as downloaded but
    fails with "not downloaded", see
    [A model won't download](/help/fix/model-download-fails).
  </Step>

  <Step title="Check the mode you're using has a model selected">
    As above — the right tab, not just the right section.
  </Step>

  <Step title="Try a smaller model">
    Large models need substantial memory. If a small one works and a large one
    doesn't, that's the constraint, and the smaller model is a real answer
    rather than a workaround. Whisper Base is a quick test.
  </Step>

  <Step title="Check bundled components weren't quarantined">
    Security software removing whisper.cpp, sherpa-onnx or FFmpeg breaks local
    transcription specifically while leaving everything else working. See
    [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo).
  </Step>
</Steps>

## GPU acceleration

Whisper has an **Enable GPU** toggle. If GPU acceleration fails — an
unsupported card, or not enough video memory — Neato Echo **restarts on the
CPU, retries the same request, and tells you it's using CPU instead**. Your
dictation still completes; it's slower.

If that happens every time, turn the GPU toggle off in the transcription model
picker. It removes the failed attempt and the delay it adds.

## What "local" does and doesn't need

* **No network** once the model is downloaded. Nothing is sent anywhere.
* **Real CPU or GPU work** — so a laptop on battery may throttle it, and modest
  hardware is slower.
* **The model selected for each mode**, as above.

[Local models](/guides/local-models) covers the engines and what each needs
from your PC.

## FAQ

<AccordionGroup>
  <Accordion title="Transcription is slow.">
    Expected on modest hardware, especially with the larger Whisper models. A
    smaller model is the usual answer if speed matters more than the last few
    points of accuracy. For English dictation, **Nemotron Speech Streaming EN**
    is the fastest and shows text while you speak.
  </Accordion>

  <Accordion title="Which languages work locally?">
    It depends on the engine — the default Parakeet TDT 0.6B v3 and the Whisper
    models are multilingual; Nemotron Speech Streaming EN and Parakeet Unified
    EN are English-only. [Local models](/guides/local-models) has the detail.
  </Accordion>

  <Accordion title="Is local really private?">
    Yes. Transcription runs on your PC and the audio doesn't leave it. The only
    way audio goes elsewhere is if you add a key under **Cloud Providers** and
    pick that provider for a mode — and that's off by default.
  </Accordion>
</AccordionGroup>

## Related

* [Local models](/guides/local-models)
* [A model won't download](/help/fix/model-download-fails)
* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
