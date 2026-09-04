---
title: Introduction
description: Neato Echo is local voice dictation and meeting notes with summaries, all on your Windows PC.
---
Neato Echo turns your voice into text and notes on your Windows PC. Press a hotkey and speak, and your words are typed wherever your cursor is. Record a meeting and get a transcript with speaker labels and a summary. Everything is transcribed by speech models that run on your own machine, and everything you make is kept in a notes database on your PC.

Neato Echo is made by Neato Ventures in Houston, TX. It is a fork of the open-source OpenWhispr project (MIT license).

## What you can do

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/quickstart">
    Install, download the models, and dictate your first sentence.
  </Card>

  <Card title="Dictation" icon="microphone" href="/guides/dictation">
    Press Ctrl+Win, speak, and your words appear at your cursor. Works in any app.
  </Card>

  <Card title="Meeting transcription" icon="users" href="/guides/meeting-transcription">
    Record Zoom, Teams, or Google Meet calls with speaker labels, then summarize them.
  </Card>

  <Card title="Notes" icon="note-sticky" href="/guides/notes">
    Every dictation, meeting, and upload is a note you can organize, search, and export.
  </Card>

  <Card title="Local models" icon="microchip" href="/guides/local-models">
    The speech and language models Neato Echo runs on your PC, and how to choose between them.
  </Card>

  <Card title="Common problems" icon="wrench" href="/troubleshooting">
    Find the fix, starting from what's going wrong.
  </Card>
</CardGroup>

## How your audio is processed

Neato Echo is local by default. Speech recognition runs on NVIDIA Parakeet, and summaries, cleanup, and the agent run on a Qwen language model, both downloaded to your PC during setup. Nothing leaves your machine unless you choose to add your own API key under **Cloud Providers** in Settings. See [cloud vs local](/guides/cloud-vs-local).

## Requirements

Neato Echo runs on Windows 10 and 11, 64-bit. Download it from [echo.neatoventures.com](https://echo.neatoventures.com). [System requirements](/platform/system-requirements) has the detail, including what the on-device models need.

## Getting help

Email [hello@neatoventures.com](mailto:hello@neatoventures.com), or see [Getting help](/help/getting-help) for what to include.
