---
title: Dictating in other languages
description: Set the language you speak, use auto-detect, and see which languages each local transcription engine supports.
---
Neato Echo transcribes dozens of languages, plus an auto-detect option. Which of
them are available depends on **which engine you're transcribing with** — they
don't all support the same set.

## Setting your language

Open **Settings**, then **Preferences** under **App**, and find the **Language**
section. There are two settings there and they do different things:

| Setting                    | What it controls                                             |
| -------------------------- | ------------------------------------------------------------ |
| **Interface language**     | The language Neato Echo's own menus and buttons are shown in |
| **Transcription language** | The language you speak when dictating                        |

Changing the interface language does nothing to your dictation, and vice versa.
The app describes them as being set *"independently"* for exactly this reason.

Your transcription language applies everywhere — dictation, meeting notes, and
uploaded audio all use the same one.

<Note>
  The **engine** is a different matter and is set per mode: dictation, note
  recording, and audio upload each choose their own under **Settings** →
  **Speech-to-Text** under **AI Models**. So it's possible to be on Whisper for
  dictation and Parakeet for uploads, and get different language coverage from
  each — with one language setting feeding both.
</Note>

## Auto-detect

**Auto-detect** is the default, and it works out the language from what you say.
It's the right choice if you switch languages regularly or use more than one in
a single passage.

Naming your language outright is more accurate than leaving it on auto,
particularly on short or noisy clips where there's less for the detector to go
on. If you nearly always dictate in one language, set it.

## What each engine supports

All engines run locally on your PC.

| Engine                                | Languages                        |
| ------------------------------------- | -------------------------------- |
| **Parakeet TDT 0.6B v3** (default)    | Multilingual (about 25 languages) |
| **Whisper**                           | Multilingual — the widest coverage |
| **Nemotron 3.5 ASR Streaming 0.6B**   | Multilingual, streaming          |
| **Nemotron Speech Streaming EN 0.6B** | English only                     |
| **Parakeet Unified EN**               | English only                     |

Whisper has the widest coverage, so if a language you need isn't offered, check
which engine that mode is on first — moving from Parakeet to Whisper adds
thirty-odd languages. The English-only engines are the fastest, and the
streaming ones show text live while you speak, but they won't transcribe
anything else.

## Getting the wrong language back

If you dictate in one language and get another, the usual causes are auto-detect
making a call on a short clip, or a mode running an engine that doesn't cover
the language you want. [The words come out
wrong](/help/fix/wrong-words-or-language) walks through it.

## Dictating in one language, pasting another

That's translation — a separate feature with its own hotkey. See
[translation](/help/dictation/translation).

## Related

* [Translation](/help/dictation/translation)
* [The words come out wrong](/help/fix/wrong-words-or-language)
* [Local models](/guides/local-models)
