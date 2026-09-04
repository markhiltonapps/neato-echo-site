---
name: Neato Echo
description: A Neato Ventures product page in the parent's Tomorrowland showroom world; cream paper, teal structure, burnt-orange action, Space Mono uppercase display, Outfit body, die-cut Googie cards, scanlines and starbursts.
inherits: C:\Users\markh\neato_ventures_website_2\DESIGN.md
colors:
  cream: "hsl(50 33% 95%)"
  card-cream: "hsl(50 25% 92%)"
  muted-cream: "hsl(45 20% 88%)"
  deep-brown: "hsl(17 35% 12%)"
  retro-brown: "hsl(17 40% 36%)"
  muted-brown: "hsl(17 20% 40%)"
  border-taupe: "hsl(17 15% 78%)"
  teal: "hsl(179 52% 52%)"
  burnt-orange: "hsl(12 93% 58%)"
  mustard: "hsl(45 87% 62%)"
  echo-tile: "#45c4c2"
  echo-cream: "#f6f5ee"
  echo-orange: "#f85830"
typography:
  display:
    fontFamily: "Space Mono, monospace"
    fontSize: "clamp(1.875rem, 1.1rem + 2.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "0.05em"
  headline:
    fontFamily: "Space Mono, monospace"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  title:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.02em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.15em"
  micro:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.65rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.2em"
  tagline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  chip: "3px"
  stamp: "4px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  pill: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section: "5rem"
---

# Design System: Neato Echo

## Overview

Neato Echo lives inside the Neato Ventures world ("The Tomorrowland Dealer Showroom") and never invents a second one. The parent DESIGN.md is the authority for palette, type, elevation, shapes, and components; this file records only what Echo adds and what it deliberately leaves out.

**What Echo adds**

- **The Echo mark.** A teal rounded tile (`#45c4c2`, 24% corner radius) holding a cream five-bar waveform inside a broken ring, with one burnt-orange dot at the ring's upper right. It is the app icon, the favicon, and the only place a filled teal square appears on the page. Master art: `neato-echo/resources/brand/neato-echo-1024.png`; `logo.svg` in the app carries the same geometry.
- **The waveform.** Echo's recurring diagram is the five-bar waveform (heights 150/300/470/300/150 on a 1024 grid, bars 74 wide, gaps 58). It replaces the parent's atom rings as the ornament that sits behind bands and inside empty states. Atom rings remain the parent's; Echo may use one slow ring in the hero as a family cue, never three.
- **The CRT frame.** Real app screenshots are the proof. They sit in a card-cream frame with a 2px taupe border, the scanline overlay from the parent, and the die-cut brown offset. Screenshots are never illustrated or mocked; a missing screenshot is an empty frame with a label, not a drawing.
- **The privacy ledger.** Facts about what stays on the PC are typeset like a data plate: Space Mono micro labels, dashed brown rules, teal check marks. It is Echo's version of the parent's spec sheet.

**Confirmed rejections (inherited plus Echo's own)**

- No icon-grid feature list, no glass or blur surfaces, no soft ambient card shadows, no system display faces, no gray anywhere.
- No kicker or eyebrow labels above headings on this site; the parent's starred hero eyebrow is not used here. Headings carry themselves.
- No invented testimonials, logos, or numbers. No latency figures until measured.

## Colors

Inherited verbatim. Named rules that Echo relies on:

- **The Brown Ink Rule.** Every dark, border, divider, and shadow is a brown at some alpha.
- **The Two Signals Rule.** Teal structures; orange acts. The Download button is orange. Everything else that is teal is structure or status.
- **The Cream-on-Brown Band Rule.** The closing download band and the footer invert to retro brown with cream text and keep the starburst wash.

## Typography

Inherited. Space Mono uppercase for every heading, label, nav item, button, and stamp; Outfit for reading text, 65 to 75 characters per line. The wordmark is `NEATO_ECHO` with an orange underscore, matching `NEATO_VENTURES` on the parent site.

## Layout

The parent rhythm: 1400px container with 2rem side padding, sections at 5rem vertical padding, band alternation (cream, card-cream band with 2px borders and starburst, brown closing band), sticky 4rem nav with a 2px bottom border. Card grids at 1.25 to 1.5rem gaps, two columns from 768px, three from 1024px.

## Elevation, Shapes, Components

Inherited: die-cut hard offset shadows (`5px 5px 0` retro brown at 0.15, hover `8px 8px 0` teal at 0.2 with a `-2px, -2px` lift), 2px borders, 12px radius base, the `cta` (orange), `hero` and `hero-outline` (teal), `outline` (brown border) and `retro` (brown fill) buttons, teal focus ring with a cream offset.

## Motion

One authored moment: sections fade up once on first view. The hero ring orbits slowly. Nothing else moves except hover lifts. Respect `prefers-reduced-motion`.
