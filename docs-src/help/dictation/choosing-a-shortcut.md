---
title: Choosing a shortcut that works
description: The rules a hotkey has to follow, which combinations Windows won't give up, and what to use instead.
---
Most rejected shortcuts fail for one of three reasons: no modifier key, a
combination Windows has already claimed, or another app got there first. Neato
Echo tells you which when it refuses.

Set shortcuts under **Settings** → **Hotkeys** under **App**.

## The rules

The app shows these in a **Shortcut Guide** next to the hotkey field:

* **Use at least one modifier** — Ctrl, Alt, Shift, Win, or similar.
* **Three keys maximum.** Four-key combinations are rejected.
* **Single keys on their own aren't allowed.**
* **Reserved system shortcuts are blocked.**
* **Some combinations may still conflict** with whatever else you run — those
  can't be predicted, only tried.

## The one principle worth knowing

**Pick a combination that types nothing.**

A hotkey is held down while you talk, sometimes for a minute, in whatever app
you're already typing into. If it ever slips through — a moment before the app
grabs it, a window that doesn't give it up — a combination ending in a letter
puts that letter in your document. A combination made only of modifier keys
can't.

That single test explains why the default is what it is, and it's a better
guide than any list.

## What to use

| Best                                                      | Also good                                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Ctrl+Win** — the default. Two modifiers, types nothing. | `Ctrl+Alt`, same reasoning. `Ctrl+Shift+K` if you'd rather have a letter. |

**The default is the recommendation.** If dictation is working, there's no
reason to change it — the reasons to change are a physical conflict with
something you use constantly, a keyboard without the key, or wanting the same
shortcut across two machines with different layouts.

<Note>
  Modifier-only combinations like `Ctrl+Win` are fully supported and are what
  the app ships with. You don't need a letter on the end.
</Note>

## What to avoid

* **`Win+H`** — that's Windows' own voice typing shortcut. Binding it puts two
  dictation systems on one key.
* **Anything ending in a common letter with one modifier** — `Ctrl+S`, `Ctrl+F`
  and their neighbors mean something in nearly every app, and most are blocked
  outright.
* **Caps Lock.** Some dictation tools use it; Neato Echo doesn't support it.

## What the errors mean

| Message                                                                 | What's happening                                                                                        |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| *"\[key] is already registered by another application"*                 | Something else on your machine claimed it first. Pick another, or quit the other app to find out which. |
| *"\[key] may be reserved by your desktop environment"*                  | Windows won't release it. Nothing Neato Echo can do — choose a different one.                           |
| *"Could not register \[key]. It may be in use by another application."* | Same as the first, where the system didn't say who has it.                                              |
| *"Failed to update hotkey to \[key]. Check the format is valid."*       | The combination isn't a shape the app accepts — usually a missing modifier.                             |
| *"This hotkey is already used for \[feature]"*                          | You've assigned it to another Neato Echo shortcut. Each of the five needs its own.                      |

When a shortcut is rejected the app offers up to three alternatives inline.
They're a fixed list rather than a check of what's free on your machine, so
treat them as a starting point and not a guarantee.

## If it registers but doesn't do anything

That's a different problem — the shortcut saved fine and something is
intercepting it. See [my hotkey doesn't work](/help/fix/hotkey-not-working).

## Related

* [Your hotkeys](/help/dictation/hotkeys)
* [Hold or tap](/help/dictation/hold-or-tap)
* [My hotkey doesn't work](/help/fix/hotkey-not-working)
