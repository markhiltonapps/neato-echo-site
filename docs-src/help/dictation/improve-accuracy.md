---
title: Getting better accuracy
description: Practical things that improve transcription quality — the engine you use, your microphone, your language setting, and teaching it your vocabulary.
---
If transcription is close but not right, there are four levers worth pulling, in
roughly the order they pay off.

## 1. Name your language

Auto-detect is the default, and it's the weakest setting for accuracy because
the model spends part of its effort deciding what language you're in. If you
nearly always dictate in one language, set it explicitly under **Settings** →
**Preferences** under **App**, in the **Language** section.

This is the single cheapest improvement for most people.

## 2. Teach it your words

Names, jargon, product names and acronyms are what transcription gets wrong most
often, and no amount of model tuning fixes a word the model has never seen.

The **custom dictionary** exists for this — add the terms you use and they'll be
recognized. See [custom dictionary](/help/customize/custom-dictionary).

<Tip>
  If you've named your voice agent, its name is added to the dictionary
  automatically so it's recognized reliably when you address it.
</Tip>

## 3. Check your microphone

The built-in microphone on a laptop is usually the weakest link, especially in a
room with any background noise. A headset — even a cheap one — is a bigger
improvement than changing models.

Pick which microphone Neato Echo uses under **Settings** → **Preferences** under
**App**. If it isn't picking up at all, see [my microphone isn't
working](/help/fix/microphone-not-working).

Speaking at a normal pace helps more than speaking slowly and clearly. These
models are trained on natural speech, and over-enunciating is further from what
they expect, not closer.

## 4. Choose a better engine

Transcription runs on one of several local engines, and they aren't equally
accurate. Set yours under **Settings** → **Speech-to-Text** under **AI Models**,
on the tab for the mode you're changing — **Dictation**, **Note Recording**, or
**Audio Upload**.

| Engine                                | Trade-off                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------- |
| **Parakeet TDT 0.6B v3** (default)    | Fast on CPU, good accuracy, multilingual                                    |
| **Parakeet Unified EN**               | English only, strong accuracy                                               |
| **Whisper**                           | Widest language coverage; accuracy scales with model size and your hardware |
| **Nemotron Speech Streaming EN 0.6B** | Fastest, shows text live while you speak, English only                      |
| **Nemotron 3.5 ASR Streaming 0.6B**   | Streaming, multilingual                                                     |

If you're running Whisper and accuracy is poor, a larger model is usually the
answer — see [local models](/guides/local-models).

## What cleanup does and doesn't fix

Dictation cleanup tidies grammar and punctuation, but it can't recover a word
that was misheard — it only sees the transcript, not your audio. Persistent
wrong words are a transcription problem, not a cleanup one.

## Related

* [Custom dictionary](/help/customize/custom-dictionary)
* [Dictating in other languages](/help/dictation/languages)
* [The words come out wrong](/help/fix/wrong-words-or-language)
* [Local models](/guides/local-models)
