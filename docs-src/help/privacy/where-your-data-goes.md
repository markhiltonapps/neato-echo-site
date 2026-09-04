---
title: Where your voice and text go
description: What leaves your PC when you dictate, what never goes anywhere, and the few things that can change that.
---
With Neato Echo's default setup, nothing leaves your PC. Audio is transcribed
on your machine, the transcript is stored on your machine, and summaries,
cleanup and the agent run on a language model on your machine. Neato Ventures
has no servers in the path and never sees your audio or text.

Three things can change that, and each one is something you turn on yourself.

## The engine is set three times, not once

Dictation, note recording and audio upload each have their own speech-to-text
engine setting. They're independent, so it's worth checking all three if you
ever change one.

Open **Settings**, choose **Speech-to-Text**, and you'll see three tabs:

| Tab                | Covers                      |
| ------------------ | --------------------------- |
| **Dictation**      | Press-to-talk dictation     |
| **Note Recording** | Meeting and note recordings |
| **Audio Upload**   | Files and URLs you upload   |

All three default to a local engine (NVIDIA Parakeet). Changing one does
nothing to the other two.

## What each setup does with your audio

| Setup                              | Where the audio goes                           | What Neato Ventures keeps |
| ---------------------------------- | ---------------------------------------------- | ------------------------- |
| **Local** (default)                | Nowhere — transcribed on your PC               | Nothing                   |
| **Cloud provider, your own key**   | Straight to the provider whose key you entered | Nothing                   |

If you add a key under **Settings → Cloud Providers** and point an engine or
the language model at it, the request goes from your PC directly to that
provider. We don't proxy it and we don't see it; that provider's terms and
privacy policy govern what happens next.

## What travels with a cloud provider request

If you've chosen a cloud provider for transcription, each request carries:

* the **audio** itself
* the **model** you're transcribing with
* your **transcription language**, if you've set one rather than using auto-detect
* your **custom dictionary** terms, if you use one — they're sent as a prompt so
  the model spells names and jargon correctly

That last one surprises people, so it's worth stating plainly: if you've added
client names or internal project names to your dictionary, those words go with
every cloud transcription request. If that's not acceptable for your setup, keep
the dictionary empty or stay on a local engine.

If you've chosen a cloud provider for the language model, the text of your
dictation, note or question goes to that provider, along with any notes the
agent reads to answer you.

**Screen context is the one case where an image is sent.** If you turn on
[**Share screen context**](/help/agent/voice-agent) — it's off unless you do —
then pressing the voice agent hotkey also sends a screenshot of the display your
cursor is on to whichever model the agent is pointed at. With a local model that
stays on your PC; with a cloud provider it goes to them. It's used for that
single request and nothing else: never written to disk, never added to your
notes or transcription history, and never included in logs. Ordinary dictation
never sends one.

## Calendars

If you connect a Google or Microsoft calendar in **Settings → Integrations**,
Neato Echo reads your upcoming events from that provider so it can remind you
about meetings and link notes to them. Access is read-only, the events are
cached in the local database, and nothing is written back. Disconnecting stops
the sync.

## Updates

At launch the app asks github.com whether a newer release exists. That request
carries the app version and nothing about you or your content.

## Web search

The chat agent can search the web only if you've set a cloud provider key that
supports it. With no key, there's no web search and no search queries leave
your PC.

## Usage analytics

There are none. Neato Echo sends nothing about your usage to anyone.

## Related

* [Cloud vs local processing](/guides/cloud-vs-local)
* [What is stored, and for how long](/help/privacy/what-we-store-and-for-how-long)
* [Is my data used to train AI models?](/help/privacy/is-my-data-used-to-train-ai)
* [Privacy Policy](https://echo.neatoventures.com/privacy.html)
