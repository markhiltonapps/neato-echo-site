---
title: My hotkey doesn't work
description: Nothing happens when you press the shortcut — conflicts, blocked keys, and the fallbacks Neato Echo tries on its own.
---
You press your dictation shortcut and nothing happens. Almost always, another
application registered the same combination first — whoever asks Windows first
wins, and Neato Echo is told it can't have it.

Every hotkey lives in **Settings** → **Hotkeys** under **App**. That section
holds **Dictation Hotkey** and the separate shortcuts for **Voice Agent**,
**Translation** and **Meeting** recording. Only the dictation hotkey is set out
of the box; the other three stay empty until you choose them.

## The default

The default dictation hotkey is **Ctrl + Win** (the Windows key). Tap it to
start and stop, or hold it while you speak, depending on your activation mode.

If the default can't be registered at startup, Neato Echo tries **F8**, then
**F9**, then **Ctrl+Shift+Space** — so if your hotkey is one of those and you
never chose it, that's why.

## Quick checks

<Steps>
  <Step title="Try a different combination">
    The fastest way to prove a conflict. Open **Settings** → **Hotkeys** under
    **App**, set **Dictation Hotkey** to something unusual like
    **Ctrl+Shift+K**, and try again. If that works, the original was taken.
  </Step>

  <Step title="Add a second hotkey rather than replacing the first">
    Use **Add another hotkey** to bind a fallback. Both work, so you're covered
    if one is claimed by an application you only sometimes run.
  </Step>

  <Step title="Check the Shortcut Guide">
    The hotkey field shows a **Shortcut Guide** with the rules and recommended
    combinations. Some keys are refused outright — the app lists them under
    **Blocked shortcuts**, because Windows reserves them.
  </Step>

  <Step title="Check the app you're typing into">
    Full-screen games, remote desktop sessions and virtual machines capture
    keyboard input before anything else sees it. Test in Notepad to rule this
    out.
  </Step>
</Steps>

## What makes a valid shortcut

The app enforces these, so a combination that breaks them won't save:

* It must include at least one modifier — Ctrl, Alt, Shift and so on.
* Three keys maximum.
* Single keys on their own aren't allowed.
* Reserved Windows shortcuts are refused.

Combinations that work well on Windows: **Ctrl+Win** (the default),
`Ctrl+Alt`, `Ctrl+Shift+K`.

The best choices are the ones that type nothing if they slip through while
you're holding them — the default is modifier-only for exactly that reason.

## Tap or hold

**Activation Mode** in the same section decides how the key behaves:

* **Tap** — press once to start, press again to stop.
* **Hold** — hold the key while you speak, release to finish.

If dictation stops the instant you start speaking, or never stops, you're
probably in the other mode from the one you expect.

## FAQ

<AccordionGroup>
  <Accordion title="It worked, then stopped after I opened another app.">
    That app claimed the shortcut. Close it and try again to confirm, then
    either change one of the two or add a second hotkey in Neato Echo.
  </Accordion>

  <Accordion title="It says 'Failed to register hotkey'.">
    Windows refused the combination — usually because it's already taken or
    it's reserved. Choose another; the Shortcut Guide lists ones that work.
  </Accordion>

  <Accordion title="My hotkey changed on its own.">
    If the one you set couldn't be registered at startup, Neato Echo falls back
    to F8, F9 or Ctrl+Shift+Space so dictation still works. Set it again and, if
    it keeps happening, something else is taking it first.
  </Accordion>

  <Accordion title="The voice agent, translation or meeting hotkey does nothing.">
    Those three have no default. Open **Settings** → **Hotkeys** under **App**
    and choose a combination for each one you want to use.
  </Accordion>
</AccordionGroup>

## Related

* [Choosing a shortcut that works](/help/dictation/choosing-a-shortcut)
* [Your hotkeys](/help/dictation/hotkeys)
* [How dictation works](/guides/dictation)
* [It answers me instead of typing](/help/fix/it-answers-instead-of-typing)
