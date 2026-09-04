---
title: Antivirus or firewall blocks Neato Echo
description: SmartScreen warning about the installer, Windows Defender quarantining bundled binaries, or a firewall prompt about the local server.
---
Security software flags Neato Echo, or quietly removes parts of it after
installation. There are several separate versions of this and they look
different, so it's worth identifying which one you have.

## 1. SmartScreen says "Windows protected your PC"

The Neato Echo installer isn't code-signed yet, so Windows SmartScreen shows a
blue **Windows protected your PC** screen the first time you run it. It's a
reputation signal, not a detection — Windows says the same about any new,
unsigned application. Norton, McAfee and similar products can show their own
version of the same warning.

**What to do:** download only from
[echo.neatoventures.com](https://echo.neatoventures.com) or the
[GitHub releases page](https://github.com/markhiltonapps/neato-echo/releases/latest).
Then, on the SmartScreen screen, click **More info**, and then **Run anyway**.
Other security suites have an equivalent "keep" or "run anyway" option.

If your security software reports a specific detection name rather than a
generic warning, please send it to us — that's what a false-positive report to
the vendor needs.

## 2. Bundled components are quarantined

This is the one that produces confusing symptoms, because the app installs fine
and then fails at one specific task. Neato Echo ships helper programs for the
work it does locally, and Windows Defender or another scanner sometimes removes
them **silently** afterwards:

| Binary                            | What breaks when it's removed                                        |
| --------------------------------- | -------------------------------------------------------------------- |
| FFmpeg                            | Transcription fails immediately with "FFmpeg not found"              |
| `whisper-server` / whisper.cpp    | Local Whisper transcription doesn't work                             |
| sherpa-onnx                       | Local Parakeet and Nemotron transcription fails                      |
| `llama-server`                    | Summaries, dictation cleanup and the agent stop working              |
| `windows-system-audio-helper.exe` | Meeting recordings fall back to microphone only                      |

**What to do:**

<Steps>
  <Step title="Restore anything that was quarantined">
    In **Windows Security → Virus & threat protection → Protection history**,
    find the entry for the file, open it, and choose **Actions → Restore** (or
    **Allow on device**).
  </Step>

  <Step title="Add an exclusion so it doesn't happen again">
    **Windows Security → Virus & threat protection → Manage settings →
    Exclusions → Add or remove exclusions**. Add the Neato Echo install folder
    (where the bundled servers and helpers live), and add
    `%USERPROFILE%\.cache\neato-echo`, where the downloaded models are kept.
  </Step>

  <Step title="Reinstall if a file is still missing">
    Run the newest `Neato-Echo-Setup-<version>.exe` over your existing install
    and the removed files come back. Your settings and notes stay where they
    are.
  </Step>
</Steps>

Reinstalling without adding the exclusion first usually just repeats the cycle.

## 3. A firewall prompt for the local server

The first time local Parakeet transcription runs, Windows may ask whether to
allow `sherpa-onnx-ws-win32-x64` on public and private networks. You may see the
same kind of prompt for the local language model server, `llama-server`.

**Either answer is safe.** These servers only serve Neato Echo itself over
`127.0.0.1`, and Windows never filters loopback traffic — so everything works
even if you click Cancel. The prompt appears because the server has no
loopback-only bind option, so Windows sees it listening on all interfaces.

## 4. The firewall blocks downloads or a cloud provider

With the default local setup Neato Echo only needs the network for two things:
downloading models (from `huggingface.co` and GitHub) and checking for updates
(from `github.com`). If you've added a key under **Cloud Providers**, requests
to that provider need to get out too.

If those fail with connection errors rather than a security warning, the
firewall is blocking outbound traffic rather than the application itself. Allow
Neato Echo through Windows Firewall, and on a managed network ask your IT team
to allow those hosts — see [For your IT team](/help/privacy/for-your-it-team).

## FAQ

<AccordionGroup>
  <Accordion title="Is Neato Echo actually safe?">
    The desktop app is open source — you can read exactly what it does at
    [github.com/markhiltonapps/neato-echo](https://github.com/markhiltonapps/neato-echo).
    Downloads come from echo.neatoventures.com and from GitHub releases, and
    nothing leaves your PC with the default local setup.
  </Accordion>

  <Accordion title="It worked, then stopped after a scan.">
    Classic quarantine. A scheduled scan removed a bundled binary after
    installation — section 2 above.
  </Accordion>

  <Accordion title="My company won't let me add exclusions.">
    Ask IT to allowlist the application rather than individual files, and point
    them at [For your IT team](/help/privacy/for-your-it-team) so the network
    side is handled at the same time.
  </Accordion>

  <Accordion title="Which detection name should I report?">
    Whatever your security software shows — the exact string. That's what
    vendors need for a false-positive submission.
  </Accordion>
</AccordionGroup>

## Related

* [Neato Echo won't open](/help/fix/app-wont-open)
* [Local transcription isn't working](/help/fix/local-transcription-not-working)
* [Updates and reinstalling](/help/fix/updates-and-reinstalling)
