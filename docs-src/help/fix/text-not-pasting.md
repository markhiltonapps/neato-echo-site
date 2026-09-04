---
title: The text doesn't paste
description: Transcription works but nothing appears in the app you're typing into — the automatic pasting setting, apps that refuse simulated input, and the clipboard fallback.
---
Your words were transcribed — you can see them in the app — but nothing landed
where you were typing.

**Your text isn't lost.** Neato Echo puts it on the clipboard, so
<kbd>Ctrl</kbd>+<kbd>V</kbd> pastes it right now while you work out the rest.

## The fix

Windows needs no special permission for automatic pasting — the app says so
itself when you check permissions. So if text isn't pasting, it's one of these:

<Steps>
  <Step title="Check automatic pasting is on">
    **Settings** → **Preferences** under **App** → **Clipboard**. Make sure
    **Automatic pasting** is switched on.
  </Step>

  <Step title="Try a plain text field">
    Paste into Notepad. Some applications — particularly ones running as
    administrator, remote desktop sessions, and games — refuse simulated input
    from a normal-privilege app.
  </Step>

  <Step title="If Notepad works and your app doesn't">
    That app is the constraint, and the clipboard is your route into it. Press
    <kbd>Ctrl</kbd>+<kbd>V</kbd> after each dictation, or switch to manual
    pasting as below.
  </Step>
</Steps>

## If you'd rather paste manually

Turn **Automatic pasting** off and keep the text on the clipboard instead:
**Settings** → **Preferences** under **App** → **Clipboard**. Switch on **Keep
transcription in clipboard** so your dictated text stays there until you paste
it.

This is also the workaround if you're hitting
[text pasted twice](/help/fix/text-pasted-twice).

## FAQ

<AccordionGroup>
  <Accordion title="It pastes into some apps but not others.">
    That's the target application refusing simulated input rather than a problem
    with Neato Echo. Elevated applications, remote desktop clients and some
    games all do this. Use the clipboard for those.
  </Accordion>

  <Accordion title="It says 'Clipboard Paste Failed'.">
    Paste manually with <kbd>Ctrl</kbd>+<kbd>V</kbd> — the text is on the
    clipboard. Then work through the steps above.
  </Accordion>

  <Accordion title="It overwrites whatever I had copied.">
    Turn off **Keep transcription in clipboard** and Neato Echo restores your
    previous clipboard contents after pasting.
  </Accordion>
</AccordionGroup>

## Related

* [Dictating into other apps](/platform/dictating-into-other-apps)
* [Editors, IDEs and terminals](/platform/editors-and-terminals)
* [Auto-paste and the clipboard](/help/dictation/auto-paste-and-clipboard)
* [My text is pasted twice](/help/fix/text-pasted-twice)
