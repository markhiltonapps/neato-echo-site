---
title: A model won't download
description: Downloads that fail, stall, or install incorrectly — and what each error message actually means.
---
You picked a local model and the download failed, stopped part way, or finished
and then wouldn't install.

The error you got narrows it down considerably, so start there.

## What each message means

| Message                                                     | What it means                                                   | What to do                                                                                        |
| ----------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Certificate error — your network may use SSL inspection** | A proxy is intercepting the download and its root isn't trusted | Download from a different network, or have IT trust the proxy root                                |
| **Server error**                                            | The model host returned an error                                | Wait and retry — this is usually temporary and not on your side                                   |
| **Model downloaded but installation failed**                | The file arrived but couldn't be unpacked                       | Click download again. It reuses what you already downloaded rather than fetching it a second time |
| **Download failed**                                         | A generic network failure                                       | Check the connection and retry; see below if it keeps happening                                   |

<Tip>
  **"Model downloaded but installation failed" is worth retrying immediately.**
  The app is explicit that retrying installs from the file you already have — so
  it costs seconds, not another full download.
</Tip>

## A model that says it's downloaded but won't run

If a model shows as downloaded in the picker but transcription fails with a
**"not downloaded"** message, an interrupted download almost certainly left an
empty or partial file behind, and the picker is trusting the folder rather than
the contents.

<Steps>
  <Step title="Close Neato Echo">
    From the tray icon, so nothing is holding the file open.
  </Step>

  <Step title="Delete the model's folder">
    Open `%USERPROFILE%\.cache\neato-echo` in File Explorer and delete the
    folder for that model only. Leave the others alone.
  </Step>

  <Step title="Download it again">
    Reopen the app, go to **Settings** → **Speech-to-Text** (or **Language
    Models**) under **AI Models**, and download the model fresh.
  </Step>
</Steps>

## If it keeps failing

<Steps>
  <Step title="Check you have the disk space">
    Models are large, and a download that dies part way through is usually a
    full disk. The default Parakeet model is about 600 MB, the recommended Qwen
    3.5 4B language model about 2.5 GB, and the larger Whisper models need
    several gigabytes free.
  </Step>

  <Step title="Try a smaller model">
    If a small model downloads and a large one doesn't, that's disk space or a
    connection dropping over a long transfer — not a broken installation.
    Whisper Base, or a smaller Qwen size, are quick tests.
  </Step>

  <Step title="Try a different network">
    Corporate networks, VPNs and DNS filters block the model hosts more often
    than anything else, because the files come from `huggingface.co` and
    GitHub rather than from us.
  </Step>

  <Step title="Delete the model and start again">
    In the model picker, delete the partial model, then download it fresh. That
    clears a corrupted partial file, which retrying alone won't always fix. If
    the picker won't let you delete it, remove the folder by hand as described
    above.
  </Step>
</Steps>

## On a managed network

Model downloads are the one thing the default local setup needs the internet
for, so they can fail on a network where everything else works. Your IT team
needs to allow:

* `huggingface.co`
* `cdn-lfs.huggingface.co`, `cdn-lfs-us-1.huggingface.co`
* `github.com`, `objects.githubusercontent.com`

See [For your IT team](/help/privacy/for-your-it-team).

## FAQ

<AccordionGroup>
  <Accordion title="Can I use Neato Echo while a model downloads?">
    Yes. Anything that already has its model can keep working; the mode waiting
    for the new model can't transcribe until it lands.
  </Accordion>

  <Accordion title="Do I need to download a model at all?">
    For transcription, yes — Neato Echo runs speech-to-text on your PC, and the
    default Parakeet model is downloaded on first run. Summaries, cleanup and
    the agent need a language model from **Settings** → **Language Models**.
    The only way around a download is to add a key under **Cloud Providers**
    and use that provider instead.
  </Accordion>

  <Accordion title="Where do models go, and how much space do they use?">
    In `%USERPROFILE%\.cache\neato-echo`. The model picker shows each one's size
    before you download it, and you can delete any of them from the same place.
  </Accordion>

  <Accordion title="It downloads every time I restart.">
    That points at the install step failing rather than the download — the file
    never lands where the app expects it. Send us a debug log; see
    [how](/troubleshooting#send-us-a-debug-log).
  </Accordion>
</AccordionGroup>

## Related

* [Local models](/guides/local-models)
* [Local transcription isn't working](/help/fix/local-transcription-not-working)
* [Where your files live](/platform/where-your-files-live)
