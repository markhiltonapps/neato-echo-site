---
title: Dictating into other apps
description: How your words get from Neato Echo into whatever you're typing in — and what to do when they don't.
---
Neato Echo works in any application that accepts typed text: your email client,
a chat window, a document, a code editor, a browser form. There's no list of
supported apps to check, because it isn't integrating with them — it's putting
text where your cursor already is.

Knowing *how* it does that explains every case where it doesn't.

## What actually happens

When you finish dictating, Neato Echo:

1. Copies the finished text to your clipboard.
2. Sends the paste keystroke to whichever window has focus.
3. Puts your previous clipboard contents back a moment later.

That's it. Nothing is typed character by character, and nothing is injected into
the other application.

Two consequences worth knowing:

* **Your clipboard is borrowed, not taken.** It's restored afterwards — unless
  it changed in the meantime, in which case Neato Echo leaves the newer contents
  alone rather than overwriting something you copied.
* **Focus decides everything.** The text lands wherever the cursor is when
  dictation finishes. Click into the target field before you stop speaking, not
  after.

## The two settings

Both are under **Settings** → **Preferences** under **App**, in the
**Clipboard** group:

| Setting                             | Default | What it does                                                                      |
| ----------------------------------- | ------- | --------------------------------------------------------------------------------- |
| **Automatic pasting**               | On      | Pastes the text into the active app when dictation finishes                       |
| **Keep transcription in clipboard** | Off     | Leaves the dictation on your clipboard instead of restoring what was there before |

Turn automatic pasting off and Neato Echo becomes copy-only: dictate, then paste
where you like. Some people prefer that in apps where they want to review before
committing.

## What Windows needs

Nothing — it works out of the box. There are no accessibility permissions to
grant.

## When the paste doesn't land

<AccordionGroup>
  <Accordion title="Nothing appears, but the text is in my history">
    The transcription worked and the paste didn't. Press
    <kbd>Ctrl</kbd>+<kbd>V</kbd> — the text is on your clipboard, which is the
    deliberate fallback for every failure in this path. Then see [the text
    doesn't paste](/help/fix/text-not-pasting) for the cause.
  </Accordion>

  <Accordion title="It pasted into the wrong window">
    Whatever had focus when dictation ended received the text. This most often
    happens when a notification or another app steals focus mid-dictation.
  </Accordion>

  <Accordion title="It pasted twice">
    A known issue with a specific cause on Windows rather than something about
    the app you were in. [The text pasted
    twice](/help/fix/text-pasted-twice) has it.
  </Accordion>

  <Accordion title="My terminal ignored it or pasted something strange">
    Terminals use a different paste shortcut, and Neato Echo switches to it when
    it recognizes one. [Editors, IDEs and
    terminals](/platform/editors-and-terminals) covers what it recognizes and
    what to do when yours isn't on the list.
  </Accordion>

  <Accordion title="The app answered me instead of typing">
    That's the voice agent, not the paste path. [It answers instead of
    typing](/help/fix/it-answers-instead-of-typing) explains the trigger and how
    to turn it off.
  </Accordion>
</AccordionGroup>

## Fields that refuse pasted text

Some secure entry fields reject text that arrives from a paste, whatever is
doing the pasting. That's the other application's decision, not something
Neato Echo can work around — and not something we'd want to. The transcription
stays on your clipboard either way.

## Related

* [Editors, IDEs and terminals](/platform/editors-and-terminals)
* [Automatic pasting and your clipboard](/help/dictation/auto-paste-and-clipboard)
* [The text doesn't paste](/help/fix/text-not-pasting)
