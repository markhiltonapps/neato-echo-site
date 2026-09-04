---
title: Translation
description: Dictate in one language and have the text pasted in another, using a dedicated hotkey.
---
Translation gives you a **second dictation hotkey** that does one extra thing:
before pasting, it translates. You speak in one language, the text that lands is
in another.

Your ordinary dictation hotkey is unaffected — it keeps pasting in the language
you spoke.

## Turning it on

Two things are needed, and it's easy to do one and not the other.

**1. Configure it.** Open **Settings**, choose **Language Models** under
**AI Models**, then the **Translation** tab:

* **Enable Dictation Translation** — the switch. Off by default.
* **Spoken language** — what you dictate in. **Automatic** here also copes with
  dictation that mixes languages.
* **Target languages** — the languages you translate into. Add up to **5** and
  mark one as active.
* **Translation Prompt** — how the model should translate, if you want to steer
  it.

**2. Give it a key.** Open **Settings**, then **Hotkeys** under **App**, and set
the **Translation Hotkey**. Without a key there's no way to start a translated
dictation.

<Warning>
  If you haven't chosen a target language, the hotkey stays inactive — the
  settings tab says *"Pick a target language to activate the translation
  hotkey."*
</Warning>

## Switching between languages

You can keep up to five target languages configured and switch which one is
live from the **Active target language** control, without re-entering settings
each time. Useful if you write to people in two or three languages regularly.

## Where it runs

Translation runs on the local language model (**Qwen 3.5 4B** by default, from
**Settings → Language Models**), so nothing leaves your PC. If you've set up a
key under **Cloud Providers** in Settings, you can choose that provider on the
Translation tab instead — it's a **separate model choice** from dictation
cleanup, so you can run cleanup locally and translation in the cloud, or the
reverse.

Translated dictations are cleaned up first (if cleanup is on), then translated.

## Where translations show up

Translated entries are marked as such in your History, and you can re-run one
through the translation chain from the retry menu if the result wasn't what you
wanted.

## If translation fails

Your dictation is pasted **untranslated**, with a notice. It's never dropped —
you get the original text and can retry from History.

## Related

* [Dictating in other languages](/help/dictation/languages)
* [Your hotkeys](/help/dictation/hotkeys)
* [Dictation cleanup](/help/dictation/cleanup)
