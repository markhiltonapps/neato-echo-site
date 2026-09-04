---
title: Work and managed computers
description: Installing where IT has locked things down, what the app connects to, and the settings that make Neato Echo fit a restrictive policy.
---
Plenty of people install Neato Echo on a work machine. This is what to do when
that machine has opinions.

## If you can't run an installer

Neato Echo installs per user, into your own profile, and nothing it installs
requires administrator rights to *run*. Everything it writes stays in your user
account — see [where your files live](/platform/where-your-files-live). If
your policy blocks even per-user installers, ask IT to approve
`Neato-Echo-Setup-<version>.exe` from the [releases
page](https://github.com/markhiltonapps/neato-echo/releases/latest).

## If the network is filtered

With the default local setup, Neato Echo makes a small number of outbound HTTPS
connections on port 443, and everything else it runs binds to your own machine
by design. It honors system proxies.

This is the list to hand a firewall administrator, by hostname:

| Host                                   | When                                                                       |
| -------------------------------------- | -------------------------------------------------------------------------- |
| `github.com` (and its release CDN)     | Checking for and downloading app updates; downloading some model binaries |
| `huggingface.co`                       | Downloading speech and language models                                     |
| Google (`accounts.google.com`, `www.googleapis.com`) | Only if you connect a Google Calendar                        |
| Microsoft (`login.microsoftonline.com`, `graph.microsoft.com`) | Only if you connect a Microsoft calendar           |
| Your cloud provider's API              | Only if you add a key under **Settings → Cloud Providers**                 |

Local transcription needs the internet exactly once — to download the model.
After that it works offline entirely.

## If security software blocks it

The installer isn't code-signed yet, so SmartScreen and some antivirus products
flag it before it builds reputation. [Antivirus blocks Neato
Echo](/help/fix/antivirus-blocks-neato-echo) covers what to check and what to
send us.

## If your policy says nothing may leave the device

That's the default configuration, not a special one. Leave speech-to-text on a
local engine and the language model local, don't add a cloud provider key, and
no audio or text reaches anyone's servers — including ours. Neato Ventures
runs no server side for the app at all.

Two settings worth pairing with it:

* **Data Retention** off, if nothing should be written to disk either.
* Don't connect a calendar, if reading your meeting titles from Google or
  Microsoft is also out of scope.

[Where your data goes](/help/privacy/where-your-data-goes) has the full picture.

## What to send your security team

One page: [for your IT team](/help/privacy/for-your-it-team). It says what the
app is, what it contacts, where it writes, and where the source code is.

## Related

* [For your IT team](/help/privacy/for-your-it-team)
* [System requirements](/platform/system-requirements)
* [Where your files live](/platform/where-your-files-live)
