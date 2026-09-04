---
title: Cloud vs local processing
description: Neato Echo runs locally by default. Here's what that means, and when you might add your own cloud provider key.
---
Neato Echo processes speech and AI text on your own PC. You don't need an
account or an API key for anything. If you want a hosted model instead, you
can add your own key from a cloud provider, but that is optional and off by
default.

## Local processing (the default)

During setup Neato Echo downloads two models to `%USERPROFILE%\.cache\neato-echo`
and runs everything on your machine. Audio never leaves your PC.

* **Speech-to-text:** NVIDIA Parakeet (Parakeet TDT 0.6B v3, about 600 MB,
  multilingual). Whisper and Nemotron models are also available in
  **Settings → Speech-to-Text**.
* **Language model:** Qwen 3.5 4B (about 2.5 GB) for summaries, dictation
  cleanup and the agent, with smaller Qwen sizes for lower-end PCs in
  **Settings → Language Models**.
* Works offline after the initial download.
* See [local models](/guides/local-models) for the full list and how to choose.

## Cloud Providers (optional, your own key)

Under **Cloud Providers** in Settings you can enter an API key from a
third-party provider and pick it for speech-to-text, the agent, or both:

| Provider                  | What you get                                            |
| ------------------------- | ------------------------------------------------------- |
| OpenAI                    | Transcription plus GPT models for AI actions            |
| Groq                      | Fast Whisper transcription plus hosted reasoning models |
| Mistral                   | Voxtral transcription model                             |
| Anthropic / Google Gemini | AI agent and text enhancement models                    |
| Others                    | Additional providers are listed in the same section     |

With a cloud key, the audio or text you send goes to that provider under its
own terms and pricing. Anything you haven't pointed at a cloud provider keeps
running locally.

## Comparison

|          | Local (default)  | Cloud Providers (your key) |
| -------- | ---------------- | -------------------------- |
| Setup    | Download models  | Add API key                |
| Speed    | Depends on your PC | Fast                     |
| Privacy  | Fully private    | Audio or text sent to the provider |
| Internet | Not needed       | Required                   |
| Cost     | Free             | Your provider's pricing    |
