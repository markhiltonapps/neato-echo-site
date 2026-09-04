---
title: Common problems
description: Find the fix for what's actually happening in Neato Echo, starting from the symptom.
---
Pick the thing that's going wrong. Each page is a single problem with the
checks that resolve it, in the order worth trying.

If something is broken rather than confusing, skip ahead to
[sending us a debug log](#send-us-a-debug-log). It's the single most useful
thing you can attach to an email.

## Dictation

<CardGroup cols={2}>
  <Card title="Nothing was transcribed" href="/help/fix/nothing-was-transcribed">
    You spoke, and you got "No Audio Detected" or an empty result.
  </Card>

  <Card title="My microphone isn't working" href="/help/fix/microphone-not-working">
    No microphones listed, permission denied, or the wrong device is picked up.
  </Card>

  <Card title="I lost a dictation" href="/help/fix/recover-a-lost-dictation">
    Re-transcribe from history, and recover something you cancelled.
  </Card>

  <Card title="The text doesn't paste" href="/help/fix/text-not-pasting">
    Transcription works, but nothing lands in the app you're typing into.
  </Card>

  <Card title="My text is pasted twice" href="/help/fix/text-pasted-twice">
    Duplicated text after a dictation.
  </Card>

  <Card title="My hotkey doesn't work" href="/help/fix/hotkey-not-working">
    Nothing happens on the shortcut, or another app has taken it.
  </Card>

  <Card title="The words come out wrong" href="/help/fix/wrong-words-or-language">
    Wrong names, wrong language, or accuracy that dropped.
  </Card>

  <Card title="It answers me instead of typing" href="/help/fix/it-answers-instead-of-typing">
    You dictated a question and got a reply rather than your words.
  </Card>
</CardGroup>

## Meetings

<CardGroup cols={2}>
  <Card title="Meeting audio isn't captured" href="/help/fix/meeting-audio-not-captured">
    Only your voice is recorded, or nothing is.
  </Card>
</CardGroup>

## Installing, launching and updating

<CardGroup cols={2}>
  <Card title="Neato Echo won't open" href="/help/fix/app-wont-open">
    Installed, but no window appears, or the panel is off-screen.
  </Card>

  <Card title="Antivirus blocks Neato Echo" href="/help/fix/antivirus-blocks-neato-echo">
    Windows Defender, SmartScreen, Norton, or a firewall prompt.
  </Card>

  <Card title="Updates and reinstalling" href="/help/fix/updates-and-reinstalling">
    Failed updates, and a clean reinstall.
  </Card>
</CardGroup>

## Models and local transcription

<CardGroup cols={2}>
  <Card title="A model won't download" href="/help/fix/model-download-fails">
    Downloads that fail, stall, or fail to install afterwards.
  </Card>

  <Card title="Local transcription isn't working" href="/help/fix/local-transcription-not-working">
    Parakeet or Whisper on your own machine.
  </Card>
</CardGroup>

## Getting help

Email **[hello@neatoventures.com](mailto:hello@neatoventures.com)**. Tell us
your Windows version, your Neato Echo version (**Settings → System**, under
**Updates**, look for **Current version**), and what you were doing when it
went wrong.

### Send us a debug log

If something is failing rather than just confusing, such as dictation producing
nothing, a transcription erroring, or audio not being picked up, a debug log
usually turns a few days of back-and-forth into a single reply. It's the most
useful thing you can attach. Debug mode records what Neato Echo is actually
doing, including audio processing, model requests, and system operations, so a
problem that's hard to describe becomes something we can read.

<Steps>
  <Step title="Turn debug mode on">
    Open **Settings**, choose **System** under **System**, and switch on
    **Debug mode** under **Debug Logging**.
  </Step>

  <Step title="Make the problem happen again">
    The log only captures what happens while debug mode is on, so reproduce the
    issue after switching it on.
  </Step>

  <Step title="Open the logs folder">
    Click **Open Logs Folder** in the same **Debug Logging** section. The path to
    the current log is shown there too, under **Current log file**. Logs live in
    `%APPDATA%\neato-echo\logs`.
  </Step>

  <Step title="Attach the most recent log">
    Send us the newest file in that folder along with your email.
  </Step>
</Steps>

<Note>
  Prefer the command line, or need debug mode on before the app finishes
  starting? Launch with `--log-level=debug`, or set `OPENWHISPR_LOG_LEVEL=debug`
  in the `.env` file in your app data directory (`%APPDATA%\neato-echo`).
</Note>

Debug logs are plain text files, so you can open one and read it before you send
it. They're a record of what the app was doing rather than a copy of your notes,
though some entries include short excerpts of what was said or generated,
commonly the first 100 characters of a transcript or AI response, and in a few
cases (like a raw transcription-service reply) up to around 1,000 characters,
logged as-is with no redaction. Skim the file before sending, and tell us if
you'd rather redact or trim a section. We can work with a partial log.

Switch debug mode off once you've sent the log, since it writes to disk continuously.

* [GitHub Issues](https://github.com/markhiltonapps/neato-echo/issues) for
  reproducible bugs and feature requests, if you'd rather file one
* [Getting help](/help/getting-help) for what to include, and where to go for what
