---
title: My microphone isn't working
description: The "No microphones detected" message, the wrong input device, and the Windows privacy setting that quietly blocks desktop apps.
---
Almost every microphone problem is one of two things: Windows isn't letting
Neato Echo use the microphone, or your PC is listening to a different
microphone than you think.

Start in the app, because it can check the permission for you.

## Start here

<Steps>
  <Step title="Open the Permissions section">
    In **Settings**, choose **Privacy & Data** under **System**, and scroll to
    **Permissions**. It lists **Microphone**.
  </Step>

  <Step title="Check the Microphone card">
    If the permission is missing, the **Microphone** card shows a **Grant
    Access** button. Windows doesn't show a permission prompt for desktop apps
    the way it does for Store apps, so if the card stays ungranted, the setting
    lives in Windows Settings — see the next step.

    A card that has already been granted looks different: it turns green with a
    checkmark and **the Grant Access button is gone**. That's how you tell the
    two states apart — a card with no button is a granted one, not a broken one.
  </Step>

  <Step title="Allow it in Windows Settings">
    Follow the steps below, then reopen this section — the card shows as
    granted once Windows agrees.
  </Step>
</Steps>

## Allowing the microphone in Windows

1. Open **Settings → Privacy & security → Microphone**.
2. Switch on **Microphone access**.
3. Switch on **Let apps access your microphone**.
4. Check that **Let desktop apps access your microphone** further down the
   page is also on — this is the one that catches people out, because the
   toggle above it can be on while this one is off. Neato Echo is a desktop
   app, so this is the switch that matters.
5. Confirm Neato Echo appears in the list underneath.

## Choosing the right input

If the permission is granted and you still get nothing, the app is almost
certainly listening to a different microphone.

Open **Settings → System → Sound** in Windows and check the selected input
while you speak — the level meter should move. The devices that catch people
out:

* **Headsets that are connected but not worn**, so the mic is on the desk.
* **Monitors and webcams with built-in mics**, which often become the default
  the moment they're plugged in.
* **Bluetooth headphones in the wrong profile** — some switch to a low-quality
  headset mode that other apps then take over.
* **Virtual devices** installed by conferencing or streaming software, which can
  silently become the default.

You can also pick a specific microphone inside the app rather than following
the Windows default — see
[Choose your microphone](/help/customize/choose-your-microphone).

## If the microphone is unavailable

If the app reports **Microphone Unavailable**, another application is holding
the device exclusively. Quit conferencing, recording and streaming apps and try
again. This is the usual cause on Windows; the device is not shared while
another app has it open in exclusive mode.

## FAQ

<AccordionGroup>
  <Accordion title="The permission prompt never appears.">
    That's normal on Windows — desktop apps don't get a prompt. The setting is
    decided in **Windows Settings → Privacy & security → Microphone**, and
    **Let desktop apps access your microphone** must be on.
  </Accordion>

  <Accordion title="My microphone works in other apps.">
    That rules out the hardware and tells you it's the permission or the device
    selection. Work through both sections above; they're the only two things
    that can be different between apps.
  </Accordion>

  <Accordion title="It picks me up but the recording is very quiet.">
    Raise the input level in **Windows Settings → System → Sound** under your
    input device. A recording that's too quiet produces an empty result rather
    than an error — see
    [Nothing was transcribed](/help/fix/nothing-was-transcribed).
  </Accordion>
</AccordionGroup>

## Related

* [Nothing was transcribed](/help/fix/nothing-was-transcribed)
* [Meeting audio isn't captured](/help/fix/meeting-audio-not-captured)
* [Choose your microphone](/help/customize/choose-your-microphone)
