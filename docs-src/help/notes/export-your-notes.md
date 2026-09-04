---
title: Export your notes
description: Save a single note as Markdown, or keep every note mirrored to a folder on disk automatically.
---
Two ways to get your notes out of Neato Echo: export one when you need it, or
have every note written to disk continuously.

## Exporting one note

Open the note and use **Export** in the editor. Two choices:

| Option                | What you get    |
| --------------------- | --------------- |
| **As Markdown**       | The note itself |
| **As Markdown (.md)** | The transcript  |

For a meeting note those are different documents — the note is what you and the
AI actions made of it, the transcript is what was said.

## Keeping every note on disk

**Save notes as files** mirrors your notes to a folder automatically, as Markdown,
organized by folder — so `Work > Meeting Notes` becomes
`Work\Meeting Notes.md` on disk.

Open **Settings**, then **Preferences**, and find **Save notes as files**:

| Control                                 | What it does                                     |
| --------------------------------------- | ------------------------------------------------ |
| The toggle                              | Turns the mirroring on                           |
| **Save location** / **Change location** | Where the files go                               |
| **Rebuild all files**                   | Re-writes every note and transcript from scratch |

**Rebuild all files** is the one to reach for after moving the folder, or if the
files on disk have drifted from what's in the app.

<Note>
  This is how to use Neato Echo with a Markdown tool like Obsidian: point the
  save location at your vault (or a folder inside it) and your notes appear
  there as ordinary `.md` files. There's no Obsidian-specific integration — the
  files are plain Markdown, which is what makes them work anywhere.
</Note>

<Warning>
  Neato Echo **owns** that directory. It rewrites each file whole when a note
  changes, and deleting a folder in the app deletes it on disk. Don't hand-edit
  the files or keep anything else in there — point the save location at a folder
  used for nothing else, and edit notes in the app.
</Warning>

## Formats

Export is **Markdown**. There's no built-in DOCX or PDF export today — if you
need one of those, export the Markdown and convert it, or paste into the
application you're producing the document in.

If that's blocking something for you, [tell us](/help/getting-help) — knowing
what people actually need is how it gets prioritized.

## Taking everything with you

Everything Neato Echo keeps is already on your PC, so there's nothing to
request from anyone:

* **Save notes as files** with **Rebuild all files** gives you every note and transcript
  as Markdown in one pass.
* The notes database itself lives in `%APPDATA%\neato-echo`. Copy that folder
  and you have a full backup — see
  [where your files live](/platform/where-your-files-live).

## Related

* [Organize notes with folders](/help/notes/organize-with-folders)
* [Where your files live](/platform/where-your-files-live)
