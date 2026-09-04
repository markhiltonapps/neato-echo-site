---
title: Local models
description: The speech and language models Neato Echo runs on your PC, and how to choose between them.
---
Neato Echo keeps your audio on your device. Two kinds of model run locally:
speech-to-text models that turn your voice into words, and a language model
that writes summaries, tidies dictation, and powers the agent.

## NVIDIA Parakeet and Nemotron (the default engine)

Parakeet is the default. It's fast, accurate, and works well on lower-end
hardware.

| Model                              | Size     | Languages                                  |
| ---------------------------------- | -------- | ------------------------------------------ |
| Parakeet TDT 0.6B v3 (default)     | \~600 MB | Multilingual (25 languages)                |
| Parakeet Unified EN 0.6B           | \~631 MB | English (state-of-the-art accuracy)        |
| Nemotron Speech Streaming EN 0.6B  | \~632 MB | English, streaming (fastest)               |
| Nemotron 3.5 ASR Streaming 0.6B    | \~650 MB | 15 languages, auto-detect (streaming)      |

### Setup

1. Open **Settings**, choose **Speech-to-Text** under **AI Models**, then the tab for the mode you're setting up: **Dictation**, **Note Recording** or **Audio Upload**. Each keeps its own engine choice.
2. Choose **Local**, then make sure the provider is **NVIDIA Parakeet**.
3. Pick a model and click **Download**.

The offline Parakeet models use INT8 quantized ONNX models for efficient CPU inference. The Nemotron models are streaming models: dictation is decoded live over one persistent connection and the text is committed the moment you stop speaking, with no second decoding pass, and with the live preview enabled the text appears as you speak. If the stream fails, transcription automatically falls back to the standard record-then-transcribe path.

## OpenAI Whisper (via whisper.cpp)

An alternative engine with a range of sizes. Larger models are more accurate and slower.

| Model  | Size     | Speed    | Quality |
| ------ | -------- | -------- | ------- |
| Tiny   | \~75 MB  | Fastest  | Basic   |
| Base   | \~142 MB | Fast     | Good    |
| Small  | \~466 MB | Moderate | Better  |
| Medium | \~1.5 GB | Slow     | High    |
| Large  | \~3 GB   | Slowest  | Best    |
| Turbo  | \~1.6 GB | Fast     | Good    |

### Setup

1. Open **Settings**, choose **Speech-to-Text** under **AI Models**, then the tab for the mode you're setting up.
2. Choose **Local**, switch the provider to **Whisper**, then select a model.
3. Click **Download**.

The whisper.cpp binary is bundled with Neato Echo. No Python or additional runtime needed.

### GPU acceleration

Local Whisper can run on your GPU for much faster transcription. Turn on **Enable GPU** in the Whisper section:

* **NVIDIA:** one-click CUDA runtime download from the GPU card in the model picker
* **AMD / Intel:** one-click Vulkan runtime download from the same GPU card, covering Radeon and Arc/integrated GPUs

If the GPU runtime fails to start (unsupported GPU, out of VRAM), Neato Echo automatically falls back to CPU with an in-app notice, and transcription keeps working.

## Which speech model to choose

* **Parakeet TDT 0.6B v3** (the default): the best all-round choice for speed, multilingual support, and lower-end hardware
* **Nemotron Speech Streaming EN**: when you want to see text appear live while you speak, and you dictate in English
* **Whisper Medium or Large**: when accuracy matters more than speed and you have the hardware for it

## Language models (Qwen)

Summaries, dictation cleanup and the agent run on a local language model, downloaded in **Settings → Language Models**. The recommended model is **Qwen 3.5 4B** (about 2.5 GB). Smaller Qwen sizes are available for PCs with less memory; they're faster but produce simpler summaries.

## Where models live

All downloaded models are stored in `%USERPROFILE%\.cache\neato-echo`. Remove them anytime from **Settings** → **System** → **Data Management** → **Model cache**, using **Clear cache**. **Open** shows you the folder first. Models can be re-downloaded when needed. See [where your files live](/platform/where-your-files-live).
