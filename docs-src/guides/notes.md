---
title: How notes work
description: Where your dictations, meetings and uploads are kept, and how to organize, search and export them.
---
Everything Neato Echo transcribes is saved as a note: dictations, meeting
recordings, uploaded audio, and anything you type yourself. Notes live in a
local database on your PC (`%APPDATA%\neato-echo`). Nothing syncs anywhere.

## Start here

<CardGroup cols={2}>
  <Card title="Organize with folders" icon="folder" href="/help/notes/organize-with-folders">
    Folders, and the ones Neato Echo makes for you.
  </Card>

  <Card title="Search your notes" icon="magnifying-glass" href="/help/notes/search-your-notes">
    Find a note by its words or by what it was about.
  </Card>

  <Card title="Export your notes" icon="file-export" href="/help/notes/export-your-notes">
    Save one note as Markdown, or mirror every note to a folder on disk.
  </Card>
</CardGroup>

## Where notes come from

| Source         | Notes                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| **Dictation**  | Saved automatically as you dictate                                                        |
| **Meetings**   | The recording, its transcript and summary. See [How meetings work](/guides/meeting-transcription) |
| **Uploads**    | Audio and video files, or a URL to fetch                                                  |
| **The editor** | Anything you write yourself                                                               |

## Importing audio

The **Upload** view turns existing recordings into notes. Drag in files
(MP3, WAV, M4A, WebM, OGG, FLAC, AAC), or paste a YouTube or direct media URL to
fetch and transcribe it. You can queue several at once and keep working while
they process.

Uploads are transcribed by the local Parakeet model by default, with no file
size limit. If you've added a cloud provider key and chosen it for uploads,
that provider's own limits apply.

Uploads can be transcribed with speaker detection too, using the same on-device
models the meeting recorder uses. See
[speaker labels](/help/meetings/speaker-labels).

## Working with a note

Each note has an editor, AI actions that clean up or summarize what's there, and
its own chat panel for asking questions about that note's content. The
[chat agent](/help/agent/chat-agent) searches across all of them at once.
