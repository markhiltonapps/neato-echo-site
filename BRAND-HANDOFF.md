# Neato Ventures brand handoff (for the Neato Echo site)

Copied from the neatoventures.com repo (`markhiltonapps/neatoventures`, commit ea656b1) on 2026-09-05 so this site can match the company site.

This repo already has its own `DESIGN.md` and `PRODUCT.md`. Nothing was overwritten. The Neato Ventures system sits beside them:

- `DESIGN.neatoventures.md` — the recorded design system for neatoventures.com: tokens, type (Space Mono display, Outfit body), the Googie card, starburst bands, scanlines, atom rings, button variants, and the do's and don'ts.
- `.impeccable/design.neatoventures.json` — the detector sidecar for that system.
- `neato-ventures-brand-guide.md` — the short brand prompt with exact CSS tokens and Tailwind config.
- `brand/neato-ventures/` — logo PNGs, favicon, and the site's `index.css` and `tailwind.config.ts` for literal token values.

## How to use it in Impeccable
1. Keep `PRODUCT.md` as is; it is Neato Echo's product truth.
2. Ask for the rebrand explicitly, for example: "Redesign this site to match the Neato Ventures system in DESIGN.neatoventures.md." Impeccable treats that as a redesign: it replaces the current look and, at the finish, rewrites `DESIGN.md` from what was built. At that point `DESIGN.neatoventures.md` can be deleted.
3. Inherit the site-wide system: palette, type, cards, bands, motion grammar, copy voice.
4. Ignore the wearables **showroom stage** parts (the `.showroom` container, cqw-measured hero, literal showroom inks, worn strip, configurator, trim sheet). Those belong to one marketing page on neatoventures.com.
5. Keep Neato Echo's own product imagery and facts; only the visual world changes.
