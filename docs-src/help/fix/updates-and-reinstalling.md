---
title: Updates and reinstalling
description: How updates arrive, what to do when one fails, and how to reinstall without losing anything you need.
---
Neato Echo updates itself from GitHub releases. Most trouble here is either an
update that doesn't complete, or wanting a clean reinstall without losing your
notes.

## How updates arrive

When a new version is available, an **Update Available** button appears in the
sidebar. Click it: the update downloads, and the app restarts on the new
version.

You can also check by hand under **Settings** → **System** → **Updates** — the
number is shown next to **Current version**, with **Check for Updates** below
it. Include that number whenever you write to us — it's the first thing we look
at.

## If an update fails

If you see **Update Error**, note the message and try again later. If it
persists, download the newest `Neato-Echo-Setup-<version>.exe` from
[echo.neatoventures.com](https://echo.neatoventures.com) or the
[GitHub releases page](https://github.com/markhiltonapps/neato-echo/releases/latest)
and run it over the top of your existing install. That works and keeps your
data.

<Note>
  The installer isn't code-signed yet, so SmartScreen shows **Windows
  protected your PC**. Click **More info**, then **Run anyway**. See
  [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo).
</Note>

## Reinstalling

Installing a new version over an existing one keeps your settings, notes,
history and downloaded models. That's the normal path and it's safe:

<Steps>
  <Step title="Download the newest installer">
    From [echo.neatoventures.com](https://echo.neatoventures.com) or
    [GitHub releases](https://github.com/markhiltonapps/neato-echo/releases/latest).
  </Step>

  <Step title="Run it">
    You don't need to uninstall first. The installer replaces the app files and
    leaves your data alone.
  </Step>
</Steps>

Your data lives outside the install folder, which is why it survives:

* Settings and the notes database: `%APPDATA%\neato-echo`
* Downloaded speech and language models: `%USERPROFILE%\.cache\neato-echo`
* Logs: `%APPDATA%\neato-echo\logs`

Uninstalling from **Settings → Apps** leaves those folders in place too.

## A clean reinstall

A **clean** reinstall — removing the data directories as well — is a bigger
step:

<Warning>
  Removing the data directories deletes local settings, notes, dictation history
  and downloaded models. Nothing is backed up anywhere else. Export any notes
  you want to keep first — see [Export your notes](/help/notes/export-your-notes).
</Warning>

Uninstall from **Settings → Apps**, then:

```batch theme={null}
rd /s /q "%APPDATA%\neato-echo"
rd /s /q "%USERPROFILE%\.cache\neato-echo"
```

Then install again. Leave out the second line if you'd rather not download the
models again — that's usually the slowest part.

## Before you wipe anything

Worth checking first, because it's usually unnecessary:

* **Notes** are local only. Export them as Markdown, or switch on **Note
  files** so every note is mirrored to a folder on disk that you control.
* **Audio and transcripts** are local. A clean reinstall removes them.
* **Downloaded models** will need downloading again, which on a slow connection
  is the most annoying part.

## FAQ

<AccordionGroup>
  <Accordion title="Will I lose my notes?">
    Not from a normal update or an install-over-the-top. Notes are only lost if
    you delete `%APPDATA%\neato-echo` yourself, so export first if you're
    doing a clean reinstall.
  </Accordion>

  <Accordion title="Can I go back to an older version?">
    Older releases are on
    [GitHub](https://github.com/markhiltonapps/neato-echo/releases). If you're
    downgrading because something broke, please tell us what — that's worth more
    to us than the downgrade is to you.
  </Accordion>

  <Accordion title="The app says it's up to date but I know it isn't.">
    Install the newest version from
    [GitHub releases](https://github.com/markhiltonapps/neato-echo/releases/latest)
    over the top. If the auto-updater can't reach `github.com` — a firewall or
    a managed network — that's also why the button never appeared.
  </Accordion>
</AccordionGroup>

## Related

* [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo)
* [Neato Echo won't open](/help/fix/app-wont-open)
* [Where your files live](/platform/where-your-files-live)
