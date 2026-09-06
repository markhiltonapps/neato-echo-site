---
title: Dictation cleanup
description: Neato Echo can tidy your dictation before pasting it — removing filler words, fixing grammar and punctuation. It's off by default; here's what it changes and how to switch it on.
---
By default, what gets pasted is the transcript as the speech-to-text model
produced it. Neato Echo can optionally run your dictation through a language
model that, in the app's words, will *"remove filler words, fix grammar, and
polish punctuation."*

This is **off by default**. With it on, dictation reads like writing rather
than like speech — and, occasionally, the text isn't quite what you said.

## What it changes

Cleanup is meant to be conservative. It takes out the *ums* and *you knows*,
adds punctuation you didn't speak, fixes obvious grammatical slips, and leaves
your wording alone otherwise.

It does **not** rewrite your text into a different tone, answer questions, or
follow instructions you dictate. If that's happening, you're hitting the voice
agent rather than cleanup — see [the four things your voice can
start](/help/agent/voice-modes).

## Turning it on or off

Open **Settings**, choose **Language Models** under **AI Models**, then the
**Dictation Cleanup** tab. The switch is **Enable text cleanup**.

With it off you get the raw transcript — filler words, no punctuation beyond
what the model inferred, and none of the tidying. Some people prefer this for
note-taking, where fidelity matters more than polish.

## Where it runs

Cleanup runs on the local language model — **Qwen 3.5 4B** by default,
downloaded under **Settings → Language Models** — so the text never leaves your
PC. Smaller Qwen sizes are available for lower-end PCs. Local cleanup adds a
little time before the paste, depending on your hardware.

If you've set up a key under **Cloud Providers** in Settings (OpenAI, Anthropic,
Gemini, Groq and others), you can run cleanup on that provider instead. That
sends the transcript to the provider under its terms, so keep it local if you
dictate anything sensitive.

## Polish the live preview

When the floating **live preview** is on, it normally shows the raw
speech-to-text as it streams — which can read rough (fragmented, little
punctuation) next to the cleaned text that finally gets pasted. Turn on
**Polish live preview** (**Settings → Transcription**, just under the
live-preview switch) to close that gap: as you finish each sentence it's tidied
by the same cleanup model described above, while the sentence you're still
speaking stays raw so nothing lags behind your voice.

It's **off by default**, and it only does anything when text cleanup is enabled
and its model is reachable. If the model is slow or unavailable the preview
simply stays raw — it never blocks or delays what actually gets pasted, and the
final pasted text is the same either way.

## When cleanup fails

If the cleanup step can't run, your dictation is **pasted anyway**, uncleaned,
with a note saying *"Your dictation was pasted without AI cleanup."* You don't
lose the text — that's deliberate.

Recurring failures usually mean the model can't be reached: a local model that
hasn't finished downloading, or, with a cloud provider, an expired API key or
no network.

## Related

* [The four things your voice can start](/help/agent/voice-modes)
* [The words come out wrong](/help/fix/wrong-words-or-language)
* [Cloud vs local processing](/guides/cloud-vs-local)
