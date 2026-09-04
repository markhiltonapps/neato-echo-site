---
title: For your IT team
description: What Neato Echo is, what it connects to, where it writes, and where the source code is — the answers a security review asks for, in one place.
---
This is the page to send when someone asks you to justify Neato Echo to your IT
or security team. It's short because the product is: a local desktop app with
no account and no server side.

If something here doesn't cover what your reviewer asked, email
[hello@neatoventures.com](mailto:hello@neatoventures.com).

## What it is

Neato Echo is a Windows desktop dictation and meeting-notes app from Neato
Ventures (Houston, TX). It records audio when the user presses a hotkey or
starts a note recording, turns it into text on the PC, and pastes that text at
the cursor or saves it as a note. It's a fork of the open-source OpenWhispr
project, and its own source is public at
[github.com/markhiltonapps/neato-echo](https://github.com/markhiltonapps/neato-echo).

There's no sign-in, no Neato Ventures cloud, no telemetry and no analytics.

## What it does with data

| Setup                          | Audio and text destination                     | Neato Ventures involved? |
| ------------------------------ | ---------------------------------------------- | ------------------------ |
| Local (default)                | The PC — transcription, storage and AI all run on-device | No                |
| Cloud provider, user's own key | The provider the user configured, directly     | No                       |

Neato Ventures never receives audio, transcripts, notes or prompts in any
configuration. **AI training:** not possible on our side, since nothing reaches
us; a user-configured cloud provider is governed by that provider's terms.
[Where your voice and text go](/help/privacy/where-your-data-goes) has the
detail, including the fact that custom-dictionary terms travel with cloud
provider requests.

## What it connects to

Outbound only, HTTPS on 443. System proxies are honored. Allowlist by hostname,
not IP.

| Host                                                         | Purpose                                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------- |
| `github.com` and its release CDN                             | Update check at launch and update download; some model binaries |
| `huggingface.co`                                             | Downloading speech and language models on first use              |
| `accounts.google.com`, `www.googleapis.com`                  | Only if a Google Calendar is connected (read-only OAuth)         |
| `login.microsoftonline.com`, `graph.microsoft.com`           | Only if a Microsoft calendar is connected (read-only OAuth)      |
| The configured provider's API endpoint                       | Only if the user adds a cloud provider key                       |

Everything else the app runs binds to `127.0.0.1` — the local speech server,
the local language-model server, the notes search index and a calendar
sign-in callback catcher. Once models are downloaded, the app works fully
offline.

## Where it writes

| Location                             | Contents                                                          |
| ------------------------------------ | ----------------------------------------------------------------- |
| `%APPDATA%\Neato Echo`               | Settings, the SQLite notes and history database, stored audio, encrypted API keys |
| `%APPDATA%\Neato Echo\logs`          | Log files                                                         |
| `%USERPROFILE%\.cache\neato-echo`    | Downloaded speech and language models                             |
| A folder the user chooses            | Markdown copies of notes, only if **Save notes as files** is on   |

Everything is per user; nothing needs administrator rights to run. The
database is an ordinary file protected by the OS account and full-disk
encryption; cloud provider keys are encrypted through Windows DPAPI. [How
Neato Echo is secured](/help/privacy/how-neato-echo-is-secured) has the
detail.

## Retention

Set per device under **Settings → Privacy & Data**. Defaults: audio deleted
after **30 days**, transcripts kept until deleted, history **on**. If your
policy is "nothing on disk", the setting to turn off is **Data Retention** —
text is still pasted, nothing is saved. See [what is stored, and for how
long](/help/privacy/what-we-store-and-for-how-long).

## Installation

Per-user installer, `Neato-Echo-Setup-<version>.exe`, from
[echo.neatoventures.com](https://echo.neatoventures.com) or the [GitHub
releases page](https://github.com/markhiltonapps/neato-echo/releases/latest).
It is not yet code-signed, so SmartScreen warns on first run. Updates are
downloaded from GitHub releases when the user clicks **Update Available**.

## Compliance posture

Stated precisely, because reviewers check: **no attestations** — no SOC 2, no
HIPAA, no ISO 27001 — and **no BAA or DPA**. There is no Neato Ventures
infrastructure processing user data for any of those to apply to. The privacy
policy is at
[echo.neatoventures.com/privacy.html](https://echo.neatoventures.com/privacy.html)
and the terms at
[echo.neatoventures.com/terms.html](https://echo.neatoventures.com/terms.html).

## Reporting a vulnerability

[hello@neatoventures.com](mailto:hello@neatoventures.com), or GitHub's private
vulnerability reporting on the repository. Not a public issue, please.

## Related

* [How Neato Echo is secured](/help/privacy/how-neato-echo-is-secured)
* [GDPR and your data rights](/help/privacy/gdpr-and-your-data-rights)
* [HIPAA and healthcare use](/help/privacy/hipaa-and-healthcare)
* [Work and managed computers](/platform/work-computers)
