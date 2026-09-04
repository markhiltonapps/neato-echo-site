---
title: What is stored, and for how long
description: The retention settings, what they default to, where your data sits on your PC, and how to delete it.
---
Everything Neato Echo keeps is on **your own PC**, and you control how long it
stays there. Neato Ventures stores nothing — there's no account and no server
side. Two settings do the work: audio recordings are deleted after **30 days**
by default, and transcripts are kept **forever** by default until you change
it.

Both live in one place. Open **Settings**, then **Privacy & Data** under
**System**.

## The settings, and what they're set to out of the box

| Setting                       | Default | What it does                                                                                           |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| **Data Retention**            | On      | Saves transcriptions and audio to your history. Turn it off and text is still pasted, just never saved |
| **Audio Retention**           | 30 days | Deletes stored recordings after this long                                                              |
| **Transcript Retention**      | Forever | Deletes saved transcriptions — and their audio — after this long                                       |
| **Save discarded dictations** | Off     | Keeps the audio of dictations you cancelled with Escape, so you can recover them                       |

Audio Retention and Transcript Retention both offer 1, 7, 14, 30, 60 or 90 days.
Audio Retention can also be set to **Disabled**, which keeps no audio at all;
Transcript Retention can be set to **Forever**, which is where it starts.

<Note>
  **Save discarded dictations** needs both Data Retention and Audio Retention
  switched on — it has nowhere to keep the audio otherwise. The app says as much
  under the toggle.
</Note>

## Turning history off entirely

Set **Data Retention** off. Your words are still typed at your cursor; nothing is
written to history. The app confirms this state in the history view: *"Data
retention is off. Transcriptions and audio are not saved to history."*

This is the setting to reach for if you dictate anything you'd rather not have
sitting on disk afterwards.

## Deleting what's already there

The same section has a **Storage Usage** panel showing how many audio files are
stored and how much space they take, with a **Clear All Audio** button beneath
it. It deletes every stored recording and can't be undone.

Shortening a retention period also applies to what you've already got — the
next cleanup sweep removes anything past the new limit.

To delete individual notes, use the Notes view. To delete everything at once,
**Settings → System → Data Management → Reset app data** removes settings,
transcriptions, recordings and downloaded models together.

## Where it sits on disk

If you'd rather look for yourself, or you're wiping a machine:

```
%APPDATA%\neato-echo
```

Inside it, `audio/` holds the recordings and `transcriptions.db` is the SQLite
database holding your history and notes. Downloaded models are separate, in
`%USERPROFILE%\.cache\neato-echo`. Uninstalling the app leaves both folders in
place; delete them yourself for a clean slate. [Where your files
live](/platform/where-your-files-live) has the full map.

<Note>
  That database is an ordinary file on your computer — Neato Echo doesn't
  encrypt it separately. It's protected by your Windows account and by whatever
  full-disk encryption you have on, such as BitLocker. Your saved cloud
  provider API keys are the exception: those are encrypted through Windows'
  credential protection, described in [how Neato Echo is
  secured](/help/privacy/how-neato-echo-is-secured).
</Note>

## What is held anywhere else

Nothing, by default. Neato Ventures has no copy of your audio, transcripts or
notes and no account to delete.

If you've added a cloud provider key, that provider handles the audio or text
you send it under its own retention policy. If you've connected a calendar,
Google or Microsoft hold your calendar data as they always did; Neato Echo only
reads it.

## FAQ

<AccordionGroup>
  <Accordion title="Does changing retention delete my old recordings?">
    Yes. The limit applies to everything stored, not just new recordings, so
    lowering it clears out anything already past the new period.
  </Accordion>

  <Accordion title="If I turn Data Retention off, do I lose my existing history?">
    No. It stops new transcriptions being saved; what's already there stays until
    you delete it or a retention period expires. **Clear All Audio** removes the
    recordings.
  </Accordion>

  <Accordion title="If I delete a note, is it gone?">
    Yes. There's no backup copy anywhere else. If you've turned on **Save notes
    as files**, the mirrored Markdown file in your chosen folder is also
    removed.
  </Accordion>
</AccordionGroup>

## Related

* [Where your voice and text go](/help/privacy/where-your-data-goes)
* [Where your files live](/platform/where-your-files-live)
* [Recovering a cancelled dictation](/help/fix/recover-a-lost-dictation)
* [GDPR and your data rights](/help/privacy/gdpr-and-your-data-rights)
