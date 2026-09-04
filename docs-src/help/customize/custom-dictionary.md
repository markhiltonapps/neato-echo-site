---
title: Teach Neato Echo your words
description: Add names, jargon and acronyms to the custom dictionary so they come out right every time.
---
If Neato Echo keeps mangling a colleague's name, a product name or an acronym,
add it to your dictionary. Words in there are passed to the transcription model
as context, which makes it far likelier to pick them over a similar-sounding
everyday word.

## Adding words

Click **Dictionary** in the sidebar and stay on the **Dictionary** tab.

Type a word and press Enter. The placeholder shows the format:
*"Add words separated by commas — Neato Echo, Supabase, John Snow, ARR"* — so
you can add several at once. Words take effect on your next transcription;
there's nothing to save.

To add a lot at once, use **Import a list** and paste them in, one per line or
comma-separated. Neato Echo tells you how many it found — *"37 words ready"* —
before you commit.

There's an **Export dictionary** action too, which is the one to use before
moving to a new PC.

## What's worth adding

| Category                  | Examples                                    |
| ------------------------- | ------------------------------------------- |
| Names it gets wrong       | Sergey, Xanthe, Priya, Siobhán              |
| Product and company names | Neato Echo, Supabase, Kubernetes            |
| Acronyms and initialisms  | ARR, SOC 2, DPA, PII                        |
| Jargon in your field      | amortization, polymerase, arbitrage         |
| Internal terms            | project codenames, team names, system names |

Add the spelling you want to see. If you want "SOC 2" rather than "sock two",
that's the entry.

<Note>
  Don't paste your whole vocabulary in. The dictionary works as a hint to the
  model, and a very long list dilutes it — the fifty words you actually get
  wrong beat five hundred you don't.
</Note>

## Auto-learn from corrections

Neato Echo can watch for the moment you fix a transcription in the app you
dictated into, and add the corrected word for you.

The setting is **Auto-learn from corrections**, under **Settings** →
**Preferences**.

It's a good way to build a dictionary without thinking about it — the words you
correct are by definition the ones being got wrong. If you'd rather Neato Echo
didn't watch for corrections, leave it off.

## Editing and removing words

**Hover over a word in the list.** A pencil and a **✕** appear at the right of
that row — pencil to correct the spelling, **✕** to remove it.

<Note>
  Both controls are invisible until you hover, so the list looks read-only at
  rest. The same is true of [snippets](/help/customize/snippets).
</Note>

To empty the whole list, use **Clear all**. It asks first and can't be undone:
*"This will remove all words from your custom dictionary."*

Some entries are marked **Added by default** — those came with the app.

## When it doesn't help

The dictionary raises the odds; it isn't an override. If a word still comes out
wrong:

* Check you're not fighting the **language** setting — see
  [languages](/help/dictation/languages).
* Try the **spelling you want to read**, not the phonetic one.
* For a phrase you say constantly, a [snippet](/help/customize/snippets) may
  serve better — it replaces a trigger with exact text rather than nudging a
  model.
* [Improve accuracy](/help/dictation/improve-accuracy) covers the rest.

## Related

* [Snippets](/help/customize/snippets)
* [Improve accuracy](/help/dictation/improve-accuracy)
* [Wrong words or wrong language](/help/fix/wrong-words-or-language)
