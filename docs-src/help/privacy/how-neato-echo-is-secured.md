---
title: How Neato Echo is secured
description: Where your data sits, how API keys are protected, and what the app does and doesn't expose on the network.
---
Short version: there is no server side. Your notes and history are an ordinary
database file on your PC, protected by your Windows account and your disk
encryption. Any cloud provider API keys you enter are encrypted through
Windows' own credential protection. Everything the app runs binds to your own
machine by design, and the few outbound connections it makes are over TLS.

## Where your data is

| Where                              | What protects it                                                          |
| ---------------------------------- | ------------------------------------------------------------------------- |
| **Notes, history and settings**    | Your Windows account and your disk encryption (BitLocker, if you use it)  |
| **Cloud provider API keys**        | Encrypted through Windows DPAPI, tied to your user account                |
| **Model downloads and updates**    | Fetched over HTTPS from huggingface.co and github.com                     |
| **Cloud provider requests**        | TLS to the provider you configured, if you configured one                 |
| **Calendar sync**                  | OAuth sign-in in your browser, read-only access, TLS to Google/Microsoft  |

There is no Neato Ventures database, so there's nothing of yours at rest on our
side to encrypt.

## How your API keys are stored

Keys you enter under **Settings → Cloud Providers** are encrypted using
Electron's `safeStorage`, which hands off to **DPAPI**, Windows' built-in
credential protection. The encrypted blobs sit in a `secure-keys` folder inside
Neato Echo's application data (`%APPDATA%\Neato Echo`), and they can only be
decrypted by your own Windows user account on that PC.

They are never sent to Neato Ventures.

## The desktop app

* **Loopback-only by design.** Every connection out is client-initiated over
  TLS on port 443 — to github.com for updates, huggingface.co for model
  downloads, and to a calendar or cloud provider only if you connected one.
  A few components listen on `127.0.0.1` so the app's own local pieces can
  talk to each other — the local speech server, the local language-model
  server, the vector search index for notes, and a callback catcher for
  calendar sign-in. None of them accept connections from other machines.
* **Context isolation is on**, with a restricted preload bridge between the
  app's interface and the parts of it that can reach your system.
* **Native helpers are compiled from source** during the build — the key
  listener, the microphone monitor and the meeting audio helper aren't
  downloaded binaries.
* **Open source.** The full source is on
  [GitHub](https://github.com/markhiltonapps/neato-echo), so all of the above
  can be checked rather than taken on trust.

## Where our compliance stands

We'd rather be precise here than impressive.

Neato Echo carries **no compliance attestations** — no SOC 2, no HIPAA
attestation, no ISO 27001 — and Neato Ventures does not offer a BAA or a DPA.
That's because there's nothing to attest over: the app processes your data on
your PC, not on our infrastructure. If your organization needs a formal vendor
review, the honest answer is that the security posture is your own PC's
posture plus whichever cloud provider or calendar you choose to connect. [For
your IT team](/help/privacy/for-your-it-team) says this in the form reviewers
usually want.

## Reporting a security issue

Email [hello@neatoventures.com](mailto:hello@neatoventures.com), or use
[GitHub's private vulnerability
reporting](https://github.com/markhiltonapps/neato-echo/security/advisories/new).
Please don't open a public issue for a security problem.

## Related

* [For your IT team](/help/privacy/for-your-it-team)
* [Where your voice and text go](/help/privacy/where-your-data-goes)
* [Where your files live](/platform/where-your-files-live)
