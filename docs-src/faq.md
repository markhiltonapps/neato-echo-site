---
title: FAQ
description: Frequently asked questions about Neato Echo.
---
<AccordionGroup>
  <Accordion title="Is Neato Echo free?">
    Yes. Neato Echo is free to use. Everything runs locally on your PC, and there are no plans, limits, or accounts. It is a fork of the open-source OpenWhispr project, released under the MIT license.
  </Accordion>

  <Accordion title="Which processing method should I use?">
    Use the default **local** setup for privacy and offline use. If you have your own API key from a provider such as OpenAI, Groq, Gemini, Mistral, or Anthropic, you can optionally add it under **Cloud Providers** in Settings. See [cloud vs local](/guides/cloud-vs-local) for the comparison.
  </Accordion>

  <Accordion title="Can I use Neato Echo commercially?">
    Yes. The MIT license allows commercial use, modification, and distribution.
  </Accordion>

  <Accordion title="What languages are supported?">
    The default Parakeet model is multilingual, and Whisper models support 100+ languages including English, Spanish, French, German, Chinese, and Japanese. Which languages are available depends on the model you use; see [local models](/guides/local-models). Set your preferred language in settings or use auto-detect.
  </Accordion>

  <Accordion title="Where are my notes stored?">
    Notes are stored in a local database in `%APPDATA%\neato-echo`. Nothing syncs anywhere. You can export a note as Markdown, or turn on **Save notes as files** to mirror every note to a folder on disk. See [export your notes](/help/notes/export-your-notes).
  </Accordion>

  <Accordion title="Is my data secure?">
    With the default local setup, audio never leaves your PC. If you add a cloud provider key, audio and text are sent to that provider under its terms. Connected calendars read events from Google or Microsoft, and the auto-updater contacts github.com. Neato Echo doesn't collect analytics or telemetry.
  </Accordion>

  <Accordion title="How long are my recordings and transcripts kept?">
    You control it. Under **Settings**, data retention can automatically delete saved audio and transcripts after a period you choose (1, 7, 14, 30, 60, or 90 days). By default, audio recordings are removed after 30 days and transcripts are kept until you delete them. You can also turn off saving audio and transcripts entirely. Every setting, and how to use retained audio to recover a failed dictation, is in [I lost a dictation](/help/fix/recover-a-lost-dictation).
  </Accordion>

  <Accordion title="How does meeting transcription work?">
    Neato Echo detects meetings automatically (Zoom, Teams, Google Meet, and other browser-based calls) and offers to take notes. Audio is transcribed in real time with speaker labels, and a connected Google or Microsoft calendar can fill in meeting titles and attendees. When the recording ends, you can generate a summary from a preset such as Team Meeting or Interview. See [meeting transcription](/guides/meeting-transcription) for details.
  </Accordion>
</AccordionGroup>
