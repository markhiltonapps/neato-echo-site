---
title: Where every setting lives
description: A map of Neato Echo's settings — the six sections, what each one holds, and the tabs that hide things.
---
Neato Echo's settings are grouped into six sections, plus **Integrations** in
the sidebar. This page is the map, so you can go straight to the one you want
instead of hunting.

Open **Settings** from the sidebar.

## The six sections

| Section             | Holds                                                    |
| ------------------- | -------------------------------------------------------- |
| **Preferences**     | Appearance, sounds, notifications, microphone and startup |
| **Hotkeys**         | Dictation, voice agent, translation and meeting hotkeys  |
| **Speech-to-Text**  | Engines for dictation, note recording and audio upload   |
| **Speech-to-Text**, Note Recording | **Live transcript while recording**: words appear as they are spoken; turn off on a slow PC to save CPU |
| **Language Models** | Local models for chat, cleanup and summaries             |
| **Privacy & Data**  | Retention and permissions                                |
| **System**          | Updates, storage and developer tools                     |

## The two sections with tabs

These are where people most often look in the right section and still not find
the setting — because it's on a tab they didn't switch to.

**Speech-to-Text** has three tabs, and each keeps its **own** engine choice:

| Tab                | Controls                           |
| ------------------ | ---------------------------------- |
| **Dictation**      | The engine used when you dictate   |
| **Note Recording** | The engine used for meetings       |
| **Audio Upload**   | The engine used for uploaded files |

All three default to local NVIDIA Parakeet. Changing one changes only that
one — see [record a meeting](/help/meetings/record-a-meeting) for the meetings
case and [cloud vs local](/guides/cloud-vs-local) for the choice itself.

**Language Models** has five tabs: **Dictation Cleanup**, **Voice Agent**,
**Note Formatting**, **Chat** and **Translation** — again each with its own
model choice. This is also where you download the local model they run on
(Qwen 3.5 4B is the recommended default). The **Voice Agent** tab also holds
[**Share screen context**](/help/agent/voice-agent) (off by default).

## What's inside Preferences

**Preferences** is the longest section, and it renders in this order:

| Group                           | Holds                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| **Appearance**                  | **Theme** — Light, Dark or Auto                                                       |
| **Sound Effects**               | **Dictation sounds**, **Pause media**                                                 |
| **Notifications**               | Meeting detection, calendar reminders, app updates, and **Disable all notifications** |
| **Clipboard**                   | **Automatic pasting**, **Keep transcription in clipboard**                            |
| **Save notes as files**                  | The Markdown mirror, its location, and **Rebuild all files**                          |
| **Floating Icon**               | **Auto-hide when idle**, **Start position**                                           |
| **Language**                    | **Interface language**, **Transcription language**                                    |
| **Startup**                     | **Launch at login**, **Start minimized**                                              |
| **Microphone**                  | **Input Device**, **Prefer Built-in Microphone**                                      |
| **Auto-learn from corrections** | Learning from your edits                                                              |

[Running in the background](/platform/running-in-the-background) covers what
the appearance, sound, floating-icon and startup settings actually do.

## What's inside Privacy & Data and System

| Section            | Also holds                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Privacy & Data** | **Audio Retention** — including a **Disabled** option — and the **Permissions** block                                                                              |
| **System**         | **Updates** with **Current version**, **Debug Logging** and what gets logged, and **Data Management** — **Model cache** (Open, Clear cache) and **Reset app data** |

## Things that aren't where you'd guess

A short list of the ones that catch people out:

| Setting                                                        | Where it actually is                                                                                |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Meeting Mode Hotkey**                                        | **Hotkeys** — with the dictation, translation and voice agent shortcuts                             |
| **Save notes as files**                                                 | **Preferences**                                                                                     |
| **Auto-learn from corrections**                                | **Preferences**                                                                                     |
| **Input Device** (microphone)                                  | **Preferences**                                                                                     |
| **Meeting detection** and **Calendar reminders** notifications | **Preferences**, under **Notifications**                                                            |
| **Audio Retention** and **Transcript Retention**               | **Privacy & Data**                                                                                  |
| **Permissions**                                                | A block *inside* **Privacy & Data**, not its own section                                            |
| **Debug Logging**                                              | **System**                                                                                          |
| **Current version**                                            | **System**, under **Updates**                                                                       |
| **Identify and label speakers**                                | **Speech-to-Text** → **Note Recording** tab, under the engine list — there is no "Meetings" section |
| **Cloud Providers** (bring your own API key)                   | **Speech-to-Text** and **Language Models**, as an engine option on each tab                         |

## Things that aren't in Settings at all

| What                                         | Where                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------ |
| Custom dictionary and snippets               | **Dictionary** in the sidebar                                                        |
| Google and Microsoft calendars               | **Integrations** in the sidebar                                                      |
| Speaker identification for **one** recording | The pill on the meeting transcript itself — the global default is in Settings, above |

## Related

* [Choose your microphone](/help/customize/choose-your-microphone)
* [Teach Neato Echo your words](/help/customize/custom-dictionary)
* [What we store, and for how long](/help/privacy/what-we-store-and-for-how-long)
* [Choosing a shortcut](/help/dictation/choosing-a-shortcut)
