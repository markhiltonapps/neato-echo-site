---
title: Windows
description: Installing Neato Echo on Windows, the SmartScreen warning, why no permission prompts appear, hold-to-talk, meeting audio, and updates.
---
Neato Echo sits in the system tray. It needs no permission grants to type into
other applications — everything works from the moment you finish onboarding.

## What you need

* **Windows 10 or 11**, 64-bit (x64)
* A microphone

## Installing

Download `Neato-Echo-Setup-<version>.exe` from
[echo.neatoventures.com](https://echo.neatoventures.com) (the **Download**
button) or from the [releases
page](https://github.com/markhiltonapps/neato-echo/releases/latest), and run
it. It creates a desktop and Start Menu shortcut.

The installer isn't code-signed yet, so Windows SmartScreen shows **"Windows
protected your PC"** the first time you run it. Click **More info**, then **Run
anyway**. If your antivirus flags it as well, [antivirus blocks Neato
Echo](/help/fix/antivirus-blocks-neato-echo) explains what to check and what to
send us.

## Permissions

There are none to grant. Windows doesn't require special permissions for
automatic pasting.

Microphone access is governed by Windows' own privacy settings rather than by
Neato Echo, and Windows shows no prompt for desktop apps. If no audio is being
captured, check **Settings → Privacy & security → Microphone** in Windows and
make sure desktop apps are allowed, then see [the microphone isn't
working](/help/fix/microphone-not-working).

## Hotkeys and hold-to-talk

The default dictation hotkey is <kbd>Ctrl</kbd>+<kbd>Win</kbd>. Tap it to start
and stop, or hold it while you speak.

**Hold-to-talk** — hold the key while you speak, release to stop — works
through a native keyboard listener that ships with the app. The same listener
is what makes **modifier-only** hotkeys work, like <kbd>Ctrl</kbd> +
<kbd>Win</kbd> with no letter, and right-side-only modifiers.

Windows also reserves a long list of shortcuts for itself — anything starting
<kbd>Win</kbd>+<kbd>E</kbd>, <kbd>Win</kbd>+<kbd>L</kbd>, <kbd>Alt</kbd>+<kbd>Tab</kbd>
and friends. Neato Echo refuses those with an explanation rather than binding
something that will never fire. [Choosing a shortcut that
works](/help/dictation/choosing-a-shortcut) has the rules.

## How text gets pasted

Neato Echo copies the transcription to your clipboard and simulates the paste
keystroke into whatever window has focus, then puts your previous clipboard
contents back.

It sends <kbd>Ctrl</kbd>+<kbd>V</kbd> to ordinary applications and
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> to terminals, which it identifies
by the foreground window — Windows Terminal, the classic console host (Command
Prompt and PowerShell), ConEmu, mintty (Git Bash), PuTTY, Alacritty, WezTerm,
kitty, Hyper and MobaXterm by window class, plus Termius, Tabby, Wave and Rio
by executable name.

[Editors, IDEs and terminals](/platform/editors-and-terminals) covers what to
do when your terminal isn't on that list.

## Meeting audio

Windows can capture the other side of a call with no permission prompt and no
screen-share picker. A small audio helper bundled with Neato Echo records
everything the computer is playing *except itself*, so your own playback never
loops back into the recording.

One known exception: the **new Microsoft Teams** client doesn't always expose
its call audio this way. [Meeting audio isn't
captured](/help/fix/meeting-audio-not-captured) covers the symptom and the
workaround.

## Updates

Neato Echo checks for updates at launch. When one is available, an **Update
Available** button appears in the sidebar. Click it, the update downloads, and
the app restarts on the new version.

## Uninstalling

Uninstall from **Settings → Apps** as normal. Uninstalling leaves your
downloaded models and your data in place.

For a clean slate, also remove the app data and the model cache:

```batch theme={null}
rd /s /q "%APPDATA%\Neato Echo"
rd /s /q "%USERPROFILE%\.cache\neato-echo"
```

<Warning>
  That deletes local settings, dictation history and all of your notes. Nothing
  is backed up anywhere else, so export anything you want to keep first.
</Warning>

## Related

* [System requirements](/platform/system-requirements)
* [Dictating into other apps](/platform/dictating-into-other-apps)
* [Neato Echo won't open](/help/fix/app-wont-open)
* [The text pasted twice](/help/fix/text-pasted-twice)
