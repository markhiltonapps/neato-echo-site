---
title: Install, step by step
description: Every screen you will see from the download to your first dictation, with pictures.
---

This is the whole first-run, screen by screen. It takes about ten minutes, most of it waiting for two downloads. The pictures are from version 1.1.2.

## Before you start

- A Windows 10 or 11 PC (64-bit) with about 5 GB of free disk space.
- Ten minutes and an internet connection for the model downloads. After that, Neato Echo works offline.

## 1. Download the installer

Go to [echo.neatoventures.com](https://echo.neatoventures.com) and click **Download**. You get a file named `Neato-Echo-Setup-<version>.exe` in your Downloads folder. Open it.

## 2. Windows asks if you are sure

Windows SmartScreen shows **Windows protected your PC**. It appears because Neato Echo is not code-signed yet, not because anything is wrong with the file.

![Windows protected your PC. Microsoft Defender SmartScreen prevented an unrecognized app from starting.](/docs/assets/howto/01-smartscreen.png)

Click **More info**. The dialog now shows the file name and **Publisher: Unknown publisher**. Click **Run anyway**.

![The same dialog after clicking More info: App Neato-Echo-Setup, Publisher Unknown publisher, with Run anyway and Don't run buttons.](/docs/assets/howto/02-smartscreen-run-anyway.png)

## 3. Choose who it is for

Keep **Only for me** and click **Next**. Installing for all users needs an administrator and puts the app under Program Files for every account on the PC.

![Neato Echo Setup, Choose Installation Options: Anyone who uses this computer, or Only for me.](/docs/assets/howto/03-install-options.png)

Windows then dims the screen and shows a **User Account Control** prompt: "Do you want to allow this app from an unknown publisher to make changes to your device?" Click **Yes**.

## 4. Choose the folder and install

The default folder is fine. Click **Install**. Setup needs about 900 MB for the app itself; the speech and summary models come later.

![Choose Install Location, Destination Folder C:\Program Files\Neato Echo, Install button.](/docs/assets/howto/05-install-location.png)

When it finishes, leave **Run Neato Echo** ticked and click **Finish**.

![Completing Neato Echo Setup, with Run Neato Echo ticked and a Finish button.](/docs/assets/howto/06-finish.png)

## 5. Allow the microphone and screen context

The first app screen asks for two things.

![Set up Neato Echo in 3 minutes: Microphone and Screen Context, each with an Enable button.](/docs/assets/howto/07-permissions.png)

- **Microphone** turns your speech into text. Required.
- **Screen Context** lets the voice assistant see the screen you are looking at when you ask it something. Optional, and nothing is stored. You can turn it off later in Settings.

Click **Enable** on each, then **Continue** at the top right.

![The same screen with both rows showing Enabled and a Continue button.](/docs/assets/howto/08-permissions-enabled.png)

## 6. Pick your dictation shortcut

This is the key you will press to start and stop dictating in any app. The recommended shortcut is **Ctrl + Win**. Press the keys you want to use; the box records them.

![Set up your keyboard shortcut. Recommended Ctrl + Win. Press the keys you want to use.](/docs/assets/howto/09-shortcut.png)

<Tip>
  Press the recommended **Ctrl + Win** unless it clashes with something you already use. See [Choosing a shortcut that works](/help/dictation/choosing-a-shortcut) if Windows will not give it up.
</Tip>

## 7. Tap or hold

Choose what a press does. **Tap** starts listening on one press and stops on the next, which suits longer dictation. **Hold** listens only while you keep the keys down, like a walkie-talkie. You can change this later in Settings, Hotkeys. Click **Continue**.

![How should your shortcut work? Mode: Tap or Hold.](/docs/assets/howto/10-tap-or-hold.png)

## 8. Pick your meeting shortcut

This key starts meeting notes from inside any call, without opening the app. The recommended shortcut is **Ctrl + Alt + M**, which is free in Zoom, Teams, and Meet. Press the keys you want to use.

![Set up your meeting shortcut. Recommended Ctrl + Alt + M. Press the keys you want to use.](/docs/assets/howto/10b-meeting-shortcut.png)

## 9. Choose where Neato Echo thinks

Choose **Set up on this PC**. Everything you say stays on your machine, there is no account, and it works offline once the downloads finish. The **Advanced** option is for people who want to use their own API key with a cloud provider instead; see [Cloud vs local processing](/guides/cloud-vs-local).

![Where should Neato Echo do its thinking? On this PC, recommended, with a Set up on this PC button.](/docs/assets/howto/11-where-it-thinks.png)

A short explanation appears: a speech model chosen for your language, a summary model sized for this PC, and about 5 GB of free space between them. Click **Start the download**.

![One download, then it works offline: a speech model of about 650 MB, then a summary model of about 2.7 GB. Start the download button.](/docs/assets/howto/12-one-download.png)

## 10. Wait while your PC gets ready

Neato Echo picks both models for you and downloads them at the same time. Nothing to choose here. The two rows show progress, and a small panel at the bottom right tracks each download.

![Getting your PC ready. Speech at 58 percent, Summaries at 0 percent, one progress bar, a disabled Downloading button.](/docs/assets/howto/13-getting-ready.png)

The summary model is about 2.7 GB, so this is the long wait. You can click **Continue now** to go ahead while it finishes in the background; the models switch on by themselves when done. **Advanced: choose different models** opens the full picker if you know you want something else.

When both rows say **Ready**, click **Start using Neato Echo**.

![Getting your PC ready. Speech Ready, Summaries Ready, All set. Start using Neato Echo button.](/docs/assets/howto/14-all-set.png)

## 11. You are in

The Home screen opens. Two things to notice:

- **GPU acceleration available**: if your PC has a capable graphics card, click **Enable GPU** for faster transcription. **Not now** is fine; you can do it later in Settings, Speech-to-Text.
- **Connect your calendar**: optional. It titles your meeting notes and lists what is coming up. See [Connect Google or Microsoft calendar](/help/meetings/connect-your-calendar).

![The Neato Echo Home screen: GPU acceleration available, no transcriptions yet, Connect your calendar.](/docs/assets/howto/16-home.png)

The "Press Ctrl+Win to start" hint under Transcriptions names your dictation shortcut.

## 12. Your first dictation

Click into any text box, for example a new email. Press your shortcut, say a sentence, and press it again (or let go, in Hold mode). The words appear at your cursor.

The very first dictation after install can take longer while the speech model loads. After that it is quick, and with the live preview on you see the text build while you talk.

## Related

<CardGroup cols={2}>
  <Card title="Your hotkeys" href="/help/dictation/hotkeys">
    What each shortcut does and how to change it.
  </Card>
  <Card title="Record a meeting" href="/help/meetings/record-a-meeting">
    Take notes on a call and get a summary at the end.
  </Card>
  <Card title="Local models" href="/guides/local-models">
    What the speech and summary models are and how to switch.
  </Card>
  <Card title="Common problems" href="/troubleshooting">
    Start from the symptom if something is not working.
  </Card>
</CardGroup>
