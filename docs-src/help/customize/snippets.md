---
title: "Snippets: say a short phrase, get the full text"
description: Set up a trigger phrase that expands into a link, an intro, a sign-off or a prompt whenever you say it.
---
A snippet is a trigger phrase and the text it becomes. Say the trigger while
dictating and Neato Echo swaps in the saved text — so you can say *"cal link"*
and get your full booking URL, correctly spelled, every time.

The app puts it well: *"the stuff you shouldn't have to say twice."*

## Creating one

<Steps>
  <Step title="Open the Snippets tab">
    Click **Dictionary** in the sidebar, then the **Snippets** tab.
  </Step>

  <Step title="Type the trigger">
    In the field at the top — *"Add a trigger phrase"* — type the phrase you'll
    say, like `cal link`. Then press **Enter** or click **Add**.

    Triggers can be up to 80 characters, and you can't reuse one: if the trigger
    already exists, **Add** stays greyed out and the app tells you *"A snippet
    with this trigger already exists."*
  </Step>

  <Step title="Enter the replacement">
    A panel opens for the **Replacement** — the text the trigger becomes.
  </Step>

  <Step title="Save it">
    Choose **Create snippet**. It applies to your next dictation.
  </Step>
</Steps>

<Note>
  If you have no snippets yet you'll see a **New snippet** button instead of a
  list. It doesn't open a form — it just puts your cursor in the trigger field,
  so carry on from step 2.
</Note>

## What people use them for

| Trigger          | Replacement                                                  |
| ---------------- | ------------------------------------------------------------ |
| `My LinkedIn`    | `linkedin.com/in/you`                                        |
| `Sign off`       | `Best, Alex · alex@example.com`                              |
| `Intro email`    | `Hey, would love to find some time to chat later this week…` |
| `Rewrite prompt` | `Rewrite this to be more concise and professional`           |

Anything you dictate repeatedly and get wrong repeatedly is a candidate: URLs,
email addresses, postal addresses, bank details, standard disclaimers, and
prompts you feed to an AI tool.

## How matching works

Worth knowing, because it explains both why snippets fire and why they don't:

* **Whole phrases only.** A trigger never matches inside a longer word, so a
  trigger of `ask` won't fire on "asking" or "basket".
* **Case doesn't matter.** Say it however you say it.
* **The longest match wins.** If you have both `ask` and `investor ask`, saying
  "investor ask" expands the longer one — so a specific trigger always beats a
  general one that's contained in it.
* **Every occurrence expands**, not just the first.
* **Triggers must be unique.** A repeat is refused with *"A snippet with this
  trigger already exists."*

## Choosing a good trigger

The replacement happens on your transcribed words, so the trigger has to be
something you'd say deliberately and never by accident.

* **Two words beat one.** `cal link` is safe; `link` will fire constantly.
* **Say it out loud first.** If it's a phrase you'd use in an ordinary sentence,
  pick another.
* **Keep it easy to transcribe.** A trigger built from unusual words is one the
  model may mishear — in which case the snippet won't fire because the trigger
  never appeared in the text. If a trigger keeps failing this way, add its words
  to your [dictionary](/help/customize/custom-dictionary).

## Editing and removing

**Hover over a snippet in the list.** A pencil and a **✕** appear at the right
of that row — pencil to edit the trigger or the replacement, **✕** to delete it.
Edits apply to your next dictation; there's nothing to reload.

<Note>
  The two controls are invisible until you hover, so a snippet row looks
  read-only at rest. If you're hunting for a way to change one, that's where it
  is.
</Note>

## Snippets or dictionary?

They solve different problems and it's worth not mixing them up:

| Use a **snippet**                             | Use the **dictionary**                   |
| --------------------------------------------- | ---------------------------------------- |
| You want a short phrase to become longer text | You want a word transcribed correctly    |
| The output is exact and unchanging            | The output is whatever you actually said |
| `cal link` → your booking URL                 | "Siobhán" comes out as "Siobhán"         |

A snippet is a substitution. A dictionary entry is a hint. If you want a
guarantee, use a snippet.

## Related

* [Teach Neato Echo your words](/help/customize/custom-dictionary)
* [Improve accuracy](/help/dictation/improve-accuracy)
* [Cleanup and formatting](/help/dictation/cleanup)
