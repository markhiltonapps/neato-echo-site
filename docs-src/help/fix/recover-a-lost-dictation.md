---
title: I lost a dictation
description: Re-transcribe audio you already recorded, and recover a dictation you cancelled by mistake.
---
If a dictation produced nothing, errored, or you cancelled it by accident, the
audio is often still on your PC — you can transcribe it again without saying it
all over.

## Re-transcribe from history

<Steps>
  <Step title="Open your history">
    Your recent dictations are listed in the control panel.
  </Step>

  <Step title="Find the one that failed">
    Failed items are marked, and a transcription that returned nothing appears
    as an empty entry rather than disappearing.
  </Step>

  <Step title="Choose Re-transcribe">
    The item's actions include **Re-transcribe**. It runs the saved audio
    through transcription again.
  </Step>
</Steps>

If the failure was caused by something you've since fixed — a model that wasn't
downloaded yet, a cloud provider key that wasn't set up — re-transcribing is all
you need.

<Note>
  If you see **"Audio file not found or expired"**, the recording is past its
  retention period or was removed, and it can't be recovered.
</Note>

## What's kept, and for how long

These are the defaults on a new install. All of them are in **Settings** →
**Privacy & Data** under **System**. Everything here stays on this PC.

| Setting                       | Default | What it means                                                                                            |
| ----------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| **Data Retention**            | On      | Transcriptions and audio are saved to your history. With this off, text is pasted but nothing is stored. |
| **Audio Retention**           | 30 days | How long recordings stay on disk before they're deleted automatically.                                   |
| **Transcript Retention**      | Forever | Saved transcriptions aren't deleted on a schedule.                                                       |
| **Save discarded dictations** | **Off** | Whether a dictation you cancel with Escape is kept.                                                      |

Re-transcribing needs the **audio**, so it works for the last 30 days by
default. You can raise or lower that, or turn audio storage off entirely, in the
same place.

## Recovering a dictation you cancelled

By default, pressing Escape during a dictation discards it and the audio is not
kept — so a cancelled take is gone.

You can change that for next time. Switch on **Save discarded dictations** in
**Settings** → **Privacy & Data** under **System**. Cancelled dictations then
stay in your history and can be re-transcribed like any other.

It needs both **Data Retention** and **Audio Retention** to be on — the toggle
stays disabled otherwise, because there'd be nowhere to keep the audio.

## FAQ

<AccordionGroup>
  <Accordion title="Where are the audio files stored?">
    On your own PC, under `%APPDATA%\Neato Echo`. The same settings section
    shows **Storage Usage** — how many files and how much space — and **Clear
    All Audio** if you want them gone now.
  </Accordion>

  <Accordion title="I turned history off and lost something.">
    With **Data Retention** off, transcriptions are pasted but never saved, so
    there's nothing to recover. The app says as much in the history view:
    *"Data retention is off. Transcriptions and audio are not saved to
    history."*
  </Accordion>

  <Accordion title="Can I get the raw text before AI cleanup?">
    Yes. Each history item offers **View raw transcript** and **Copy raw
    transcript**, which give you the transcription before any cleanup was
    applied.
  </Accordion>
</AccordionGroup>

## Related

* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
* [The words come out wrong](/help/fix/wrong-words-or-language)
* [Where your files live](/platform/where-your-files-live)
