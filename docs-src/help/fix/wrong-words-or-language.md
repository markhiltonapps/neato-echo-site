---
title: The words come out wrong
description: Names and jargon mis-heard, the wrong language, or accuracy that dropped — what to change, in order.
---
Transcription is working, but what lands isn't what you said. Names come out
mangled, technical terms are guessed at, or the whole thing is in the wrong
language.

These have different fixes, so it's worth knowing which one you have.

## Names, jargon and acronyms

If it's specific words that are wrong — people's names, product names, medical
or legal terms — the custom dictionary is the fix, and it's the highest-value
change you can make.

Add the words you use in **Dictionary** in the sidebar, on the **Dictionary**
tab. Type them into the box at the top — you can paste several at once,
separated by commas — and press **Add**. They're then supplied to transcription
so it knows to expect them.

Full guide: [Custom dictionary](/help/customize/custom-dictionary).

<Tip>
  Add the spelling you want, not the one you're getting. The dictionary tells
  transcription what the right answer looks like.
</Tip>

## The wrong language

Check the language set for the mode you're using. The engine and its language
are configured **per mode** — dictation, note recording and audio upload each
have their own — so changing it in one place doesn't change the others.

**Settings** → **Speech-to-Text** under **AI Models**, then the tab for the mode
you're using: **Dictation**, **Note Recording** or **Audio Upload**.

<Note>
  Auto-detect works from the audio, so a short or quiet take gives it very
  little to go on. If you consistently work in one language, setting it
  explicitly is more reliable than auto-detect. Some engines are English-only
  (Nemotron Speech Streaming EN, Parakeet Unified EN); if you dictate in another
  language, pick a multilingual one such as the default Parakeet TDT 0.6B v3 or
  a Whisper model.
</Note>

## Accuracy that used to be better

Work through these in order — the first two account for most of it.

<Steps>
  <Step title="Check which engine is running for this mode">
    Engines differ in accuracy, and so do the Whisper model sizes. If you
    switched to a smaller model, or the app fell back to one, that alone
    explains a drop. **Settings** → **Speech-to-Text** under **AI Models**, then
    your mode's tab.

    The engines and what each needs from your PC are covered in
    [Local models](/guides/local-models).
  </Step>

  <Step title="Check your microphone and your distance from it">
    Accuracy is dominated by input quality. A headset microphone near your mouth
    outperforms a laptop or monitor microphone across the room by a wide margin,
    and a device change you didn't intend is common — see
    [My microphone isn't working](/help/fix/microphone-not-working).
  </Step>

  <Step title="Rule out AI processing">
    If the transcription is right but the final text isn't, something rewrote it
    afterwards. Compare with **View raw transcript** in your history, and see
    [It answers me instead of typing](/help/fix/it-answers-instead-of-typing).
  </Step>

  <Step title="Reduce background noise">
    Other voices, music and typing all degrade transcription. If you can't
    change the environment, get closer to the microphone.
  </Step>
</Steps>

## If a whole passage is missing

A very long dictation can display truncated in the app even though the full
text was saved. Open the history item and use **View raw transcript** or **Copy
raw transcript** — that gives you everything, and it's the reliable route for
long recordings.

## FAQ

<AccordionGroup>
  <Accordion title="Which model is most accurate?">
    Larger models are more accurate and slower; smaller ones are faster and less
    accurate. [Local models](/guides/local-models) sets out the options and what
    each needs from your machine.
  </Accordion>

  <Accordion title="It gets one specific word wrong every single time.">
    That's exactly what the custom dictionary is for. Add it there rather than
    changing model.
  </Accordion>

  <Accordion title="Can I fix a transcription after the fact?">
    You can re-run it — each history item offers **Re-transcribe**, which is
    useful after you've added dictionary words or changed model. See
    [I lost a dictation](/help/fix/recover-a-lost-dictation).
  </Accordion>

  <Accordion title="Does Neato Echo learn from my corrections?">
    Adding words to your custom dictionary is the reliable way to teach it.
    Everything about how that works is in
    [Custom dictionary](/help/customize/custom-dictionary).
  </Accordion>
</AccordionGroup>

## Related

* [Custom dictionary](/help/customize/custom-dictionary)
* [Improve accuracy](/help/dictation/improve-accuracy)
* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
