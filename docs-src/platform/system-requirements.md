---
title: System requirements
description: What Neato Echo needs from your Windows PC, and what the on-device speech and language models need on top of that.
---
Neato Echo is a desktop app for Windows. There's no web version and no browser
extension: it runs on your PC so it can hear your microphone and type into
whatever app you're using.

## The short answer

|             | Minimum                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| **Windows** | Windows 10 or 11, 64-bit (x64)                                           |
| **Also**    | A microphone, and an internet connection the first time you download a model |

Everything runs on your own PC by default, so the models are the demanding part.
That's covered below.

## Running models on your device

Speech-to-text and the local language model are downloaded once and then run
entirely on your machine. Two things matter: disk space for the model, and
enough speed to keep up with you.

* **Disk** — the default speech engine, NVIDIA Parakeet (Parakeet TDT 0.6B v3),
  is about **600 MB**. Whisper models range from Tiny (75 MB) to Large (3 GB).
  The recommended language model for summaries, cleanup and the agent,
  Qwen 3.5 4B, is about **2.5 GB**; smaller Qwen sizes exist for lower-end
  PCs. Everything lives under a cache folder you can clear later — see
  [where your files live](/platform/where-your-files-live).
* **Memory** — a language model has to fit in memory while it runs. Qwen 3.5 4B
  is comfortable on a PC with 8 GB of RAM or more; on a machine with less,
  pick a smaller Qwen size in **Settings → Language Models**.
* **Speed** — a PC with a discrete GPU runs the bigger models comfortably. On
  older hardware, pick a smaller model. [Local models](/guides/local-models)
  explains the trade-off and which model to start with.
* **Graphics acceleration** — an **Enable GPU** toggle exists for Whisper in
  **Settings → Speech-to-Text**. NVIDIA cards use CUDA; AMD or Intel graphics
  use a Vulkan runtime you can install from Settings in one click.

<Note>
  Some on-device components need a newer Windows build than the app itself
  does. If a local model downloads but won't start, tell us your exact Windows
  version when you write in — that's the first thing we check.
</Note>

## Architecture and downloads

64-bit **x64** only. There's no separate ARM build.

## Network

With the default local setup, the app only goes online to download models
(from huggingface.co and github.com) and to check for updates (github.com). If
you connect a calendar, it also talks to Google or Microsoft; if you add a cloud
provider key, it talks to that provider. Everything else it runs binds to your
own machine by design. It honors system proxies. [Work and managed
computers](/platform/work-computers) has the full list to hand a firewall
administrator.

Local transcription works with no internet connection at all, once the model is
downloaded.

## Related

* [Windows](/platform/windows)
* [Local models](/guides/local-models)
* [Cloud or local processing](/guides/cloud-vs-local)
