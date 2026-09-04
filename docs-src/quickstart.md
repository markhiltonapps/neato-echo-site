---
title: Quickstart
description: Get Neato Echo running on your Windows PC in a few minutes.
---
<Steps>
  <Step title="Download">
    Go to [echo.neatoventures.com](https://echo.neatoventures.com) and click **Download**. You get an installer named `Neato-Echo-Setup-<version>.exe`. The same file is on the [GitHub releases page](https://github.com/markhiltonapps/neato-echo/releases/latest).

    Neato Echo runs on Windows 10 and 11, 64-bit.
  </Step>

  <Step title="Run the installer">
    Open the `.exe`. The installer is not code-signed yet, so Windows SmartScreen shows **Windows protected your PC**. Click **More info**, then **Run anyway**, and follow the prompts.

    On first launch, Neato Echo walks you through onboarding.
  </Step>

  <Step title="Choose Local">
    When asked how to process your speech, choose **Local**. Everything then runs on your PC, and no audio leaves your machine.
  </Step>

  <Step title="Download the models">
    Onboarding downloads two models:

    * The **Parakeet** speech model (Parakeet TDT 0.6B v3, about 600 MB), which turns your voice into text.
    * The **Qwen** language model (Qwen 3.5 4B, about 2.5 GB), which writes meeting summaries and powers the agent.

    Both are stored in `%USERPROFILE%\.cache\neato-echo`. You can change models later in **Settings → Speech-to-Text** and **Settings → Language Models**.
  </Step>

  <Step title="Pick Tap or Hold">
    The dictation hotkey is **Ctrl+Win**. Choose whether to **tap** it once to start and again to stop, or **hold** it while you speak. You can change this later under **Settings → Hotkeys**. See [hold or tap](/help/dictation/hold-or-tap).
  </Step>

  <Step title="Start dictating">
    Put your cursor in any app, press **Ctrl+Win**, speak, and stop. Your text appears at the cursor.
  </Step>
</Steps>

<Note>
  Windows doesn't show a microphone permission prompt for desktop apps, but **Windows Settings → Privacy & security → Microphone** must allow desktop apps to use the microphone. If nothing is transcribed, check there first. See [my microphone isn't working](/help/fix/microphone-not-working).
</Note>

## Optional: connect your calendar

If you use Google Calendar or a Microsoft (Outlook / Microsoft 365) calendar, connect it under **Settings → Integrations**. Meeting notes then get the meeting's title and attendees, and Neato Echo can remind you to take notes before a scheduled call. See [connect your calendar](/help/meetings/connect-your-calendar).

## Next steps

* [How dictation works](/guides/dictation)
* [Set up the AI agent](/guides/agent-mode)
* [Record your first meeting](/guides/meeting-transcription)
