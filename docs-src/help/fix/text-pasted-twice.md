---
title: My text is pasted twice
description: Dictated text arriving duplicated — what to do now, and where the fix stands.
---
Your dictation finishes and the same text lands twice in a row.

**This is a known bug, not a setting you've got wrong.** It's being worked on.
What follows is how to stop it happening to you in the meantime.

## Work around it now

<Tabs>
  <Tab title="Paste manually">
    The most reliable option, and it costs one keystroke.

    <Steps>
      <Step title="Turn off automatic pasting">
        **Settings** → **Preferences** under **App** → **Clipboard**, then switch
        off **Automatic pasting**.
      </Step>

      <Step title="Keep the text on the clipboard">
        Switch on **Keep transcription in clipboard** in the same section so your
        dictated text stays there after each take.
      </Step>

      <Step title="Paste with Ctrl+V">
        Once, where you want it.
      </Step>
    </Steps>
  </Tab>

  <Tab title="Change your hotkey">
    If your dictation hotkey is a modifier-only combination — the default is
    **Ctrl + Win** — try a combination containing a regular key, such as
    **Ctrl+Alt+Space** or **Ctrl+Shift+K**.

    Set it in **Settings** → **Hotkeys** under **App**.

    Worth trying because modifier-only shortcuts are handled by a different
    input path on Windows than ordinary combinations. If it makes a difference
    for you, tell us — that's a useful data point.
  </Tab>
</Tabs>

## Help us fix it

If you're hitting this, a debug log is genuinely valuable — it records the paste
path taken and how many times it ran, which is what separates a duplicated
keystroke from a duplicated transcription.

[How to send us a debug log](/troubleshooting#send-us-a-debug-log)

Tell us as well:

* Your Windows version, and whether the target app runs as administrator.
* The exact hotkey you use, and whether Activation Mode is tap or hold.
* Whether it happens in every application or only some.

## FAQ

<AccordionGroup>
  <Accordion title="Is it duplicating the transcription or the paste?">
    Check your history. If the entry appears once but the text landed twice, the
    paste ran twice. If there are two entries, the dictation itself ran twice —
    which usually means the hotkey fired twice, and changing it is the fix.
  </Accordion>
</AccordionGroup>

## Related

* [The text doesn't paste](/help/fix/text-not-pasting)
* [My hotkey doesn't work](/help/fix/hotkey-not-working)
