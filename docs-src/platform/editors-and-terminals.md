---
title: Editors, IDEs and terminals
description: Why terminals need a different paste shortcut, which ones Neato Echo recognizes, and what to do when yours isn't recognized.
---
Dictating into a code editor is the same as dictating into anything else.
Terminals are the exception, and the reason is a keyboard shortcut rather than
anything about Neato Echo.

## Why terminals are different

<kbd>Ctrl</kbd>+<kbd>V</kbd> means "paste" almost everywhere. In a terminal it
has meant something else since long before graphical desktops, so terminals
moved paste onto <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>. Send the wrong
one and you get nothing, or a control character.

So Neato Echo looks at the window that has focus and picks the shortcut to
match. You don't configure this.

## What gets recognized

By window class: **Windows Terminal**, the classic console host (**Command
Prompt** and **PowerShell**), **ConEmu**, **mintty** (Git Bash), **PuTTY**,
**Alacritty**, **WezTerm**, **kitty**, **Hyper**, **MobaXterm**.

Electron-based terminals all share one window class, so they're recognized by
their executable instead: **Termius**, **Tabby**, **Wave**, **Rio**.

## Editors that contain terminals

VS Code, Cursor and other editors are a normal window as far as Windows is
concerned, so they receive the ordinary <kbd>Ctrl</kbd>+<kbd>V</kbd>. That
pastes correctly into the editor itself. If you're dictating into a terminal
panel *inside* the editor and the text doesn't land, click into the panel and
press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> — the text is on your
clipboard.

## If your terminal isn't recognized

You'll see one of two things: nothing pasted, or the text appearing somewhere
unexpected.

<Steps>
  <Step title="Paste it yourself">
    The text is on your clipboard.
    <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> puts it in.
  </Step>

  <Step title="Tell us which terminal">
    Recognition is a list of names, so adding yours is a small change. Email
    [hello@neatoventures.com](mailto:hello@neatoventures.com) with the
    terminal's name, or open an issue on
    [GitHub](https://github.com/markhiltonapps/neato-echo/issues).
  </Step>

  <Step title="In the meantime, turn automatic pasting off for that workflow">
    **Settings** → **Preferences** under **App** → **Clipboard** →
    **Automatic pasting**. Dictation still transcribes; you paste where you
    want it.
  </Step>
</Steps>

## Dictating code

Worth setting expectations: transcription models are trained on speech, not on
source code. Function names, symbols and punctuation-heavy syntax come out
approximately at best.

What works well is the prose around code — commit messages, pull-request
descriptions, comments, documentation, and prompts to a terminal AI agent.
Those are also where most people find the time saving.

The [custom dictionary](/help/customize/custom-dictionary) helps with the
vocabulary that matters to you: library names, your own product names, the
acronyms your team uses.

## Related

* [Dictating into other apps](/platform/dictating-into-other-apps)
* [The text doesn't paste](/help/fix/text-not-pasting)
* [Windows](/platform/windows)
