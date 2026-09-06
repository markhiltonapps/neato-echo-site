# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS in its own GitHub repository, deployed by DigitalOcean App Platform's static-site tier (confirmed 2026-09-04). Installers are served from GitHub Releases of `markhiltonapps/neato-echo`; the site never hosts binaries.

## Users

- **Mark's team (2 to 3 people, Windows only, today).** Job: download and install Neato Echo, know what changed in the latest build, and find the install steps when something looks off. They arrive from a link Mark sends.
- **Future prospects (public, later).** Professionals who dictate and sit in online meetings and who care that their audio and notes never leave their PC. Job: understand what Neato Echo does, trust the privacy claim, and download or join the pricing waitlist.

## Product Purpose

Neato Echo is a Windows desktop app for voice dictation, meeting capture, and AI summaries that runs entirely on the user's PC. The site exists to distribute the app to the team now and to present it publicly later. Success today is a teammate installing the current build without asking Mark for help. Success later is a public visitor downloading or joining the lifetime-plan waitlist.

## Positioning

Local-first by design: transcription and summaries run on-device, no account is required, and nothing is uploaded. That supports a future one-time lifetime license instead of a subscription, which a cloud dictation service cannot truthfully offer. Neato Echo is a Neato Ventures product and inherits the "future you were promised" brand.

Bot-free meeting capture is the lead differentiator and a mechanism a cloud/bot notetaker cannot copy: because Echo records from the local system audio and microphone, no meeting bot ever joins the call. Nothing appears in the participant list, no one has to admit a bot, and it works on any platform — unlike Otter, Fireflies, Fathom, and similar tools that send an AI notetaker into the meeting. State this as fact, not as a jab at named competitors on the page.

## Operating Context

- Repository for the app: https://github.com/markhiltonapps/neato-echo (fork of OpenWhispr, MIT). Windows installer is an NSIS `.exe`; builds are unsigned for now, so Windows SmartScreen shows a "More info, Run anyway" step on first launch.
- Releases: GitHub Releases on that repository, tagged by version (in the 1.1.x line as of 2026-09; treat the latest published Release as current rather than pinning a number here). The public GitHub API can list them without authentication, so a changelog page can read release notes at runtime.
- Site source lives in this repository; App Platform deploys from its `main` branch.
- Parent brand site: https://www.neatoventures.com (Houston, TX; hello@neatoventures.com).

## Capabilities and Constraints

Confirmed app capabilities (from the shipped code, 2026-09-04):

- Dictation into any app with a global hotkey (default Insert), on-device transcription via NVIDIA Parakeet through sherpa-onnx; optional Whisper models; optional bring-your-own-key cloud providers the user can enable.
- Meeting capture: detects meeting audio and known meeting apps (Zoom, Microsoft Teams, Webex; browser meetings including Google Meet by audio), prompts "Take notes", records system audio plus microphone, live transcript with speaker labels, notes saved locally in SQLite. No bot joins the call — capture is from the local machine's own audio, so nothing shows in the participant list and there is nothing for a host to admit.
- Summaries: five built-in editable presets (Team Meeting, Interview, Sales Call, One-on-one, Customer Support) plus custom actions; a picker appears when a recording ends. Summaries need a local language model, downloaded during setup, or a user-supplied cloud key.
- Voice assistant, custom dictionary, snippets, calendar connections (Google, Microsoft), and file upload transcription exist in the app and may be mentioned but are not the headline.
- No account, no Neato server, no telemetry to Neato. Cloud sign-in code exists but is disabled in this edition.
- Windows 10 2004+ or Windows 11, x64. macOS is not shipped yet.
- Requires downloading models on first run (roughly 700 MB for Parakeet; more for a local language model). Works offline afterwards.

Explicitly undecided:

- Lifetime-license price and launch date. The site may say "lifetime plan coming" and collect interest, but must not state a price.
- Whether a cloud tier will exist. Do not promise one.
- Waitlist mechanism (form backend). Until wired, the pricing section links to an email address.
- Code signing. Until a certificate is in place, install steps must include the SmartScreen step.

Roadmap (stated publicly on the site as "coming soon"; no dates, no price — do not imply either):

- **macOS app.** Already surfaced on the site as "Mac version coming soon".
- **Mobile app (iPhone and Android).** Same meeting recorder, transcripts, and summary presets, running on the phone. Notes sync through the user's own iCloud Drive or Google Drive (bring-your-own-cloud); no Neato account and no Neato server in the middle.
- **Wearable companion.** A small device that pairs with the mobile app to record meetings hands-free (clip to a lapel or lanyard) while the phone stays pocketed. It is a Neato Ventures hardware product (shared with the parent site's wearables line); same local-first model. Hardware specs beyond "clips on / all-day battery / pairs with the app" are not settled — do not invent battery life, transport, or dimensions on the Echo site.

## Brand Commitments

- Product name: Neato Echo. Company: Neato Ventures. Wordmark convention from the parent site: `NEATO_ECHO` with the underscore in burnt orange, Space Mono uppercase.
- The parent brand guide is binding: Tomorrowland/Googie retro-futurism, cream ground, teal and burnt-orange signals, mustard as a rare third, brown as the only ink, Space Mono display and Outfit body, scanlines, starburst washes, atom rings, die-cut Googie cards. Source of truth: `C:\Users\markh\neato_ventures_website_2\DESIGN.md` and `public/neato-ventures-brand-guide.md` in that repository.
- App icon: teal rounded tile, cream echo waveform inside a broken ring, one burnt-orange dot. Master art: `neato-echo/resources/brand/neato-echo-1024.png`.
- Voice: optimistic, atomic-age, lightly playful; privacy stated plainly, never as fear.

## Evidence on Hand

- One real app screenshot exists (`assets/shots/hero.png`, the main window). More can be captured from an installed build. The four story figures on the home page (dictation, live meeting transcript, "Hey Echo", meeting summary) are deliberately stylized CSS animations in the brand's CRT frame, not real screenshots — they must stay clearly illustrative and must not be passed off as literal UI. Do not fabricate UI in illustrations.
- No customers, testimonials, press, or benchmarks. Never invent any.
- Measured fact usable on the site: dictation on-device returns text without a network round trip; do not quote a latency number until measured on a real build.

## Product Principles

1. Truth over polish: every claim on the page must be true of the current build.
2. Privacy is the product's mechanism, not a badge: show what stays on the PC and how.
3. Download in one motion: the current Windows installer is never more than one click from any page.
4. Family resemblance: a Neato Ventures visitor should recognize the world instantly, while Neato Echo keeps its own voice.
5. Grow without rework: the same site must carry a public launch and a lifetime-plan offer later.
