---
title: HIPAA and healthcare use
description: Where Neato Echo stands on HIPAA — no BAA is offered, and why local mode keeps audio and transcripts on the PC.
---
If you're a Covered Entity or a Business Associate and you want to dictate
anything containing protected health information, the honest position is short:
**Neato Ventures does not offer a BAA, and Neato Echo carries no HIPAA
attestation.** What it does offer is a setup where PHI never leaves the PC at
all — which means there's no vendor in the path to sign one with.

Talk to your compliance officer before dictating clinical content. This page
gives you the facts they'll need.

## Where we stand

|                       | Status                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| **HIPAA attestation** | None                                                                                                     |
| **BAA**               | Not offered                                                                                              |
| **Our role**          | None — with the default setup, Neato Ventures never receives or processes any of your data, so it isn't a Business Associate |
| **Where PHI goes**    | With a local engine and a local language model: nowhere. It stays on the PC                              |

## Keeping PHI on the device

Neato Echo's default configuration transcribes on your PC, stores the result on
your PC, and runs summaries, cleanup and the agent on a language model on your
PC. No audio or text reaches Neato Ventures or anyone else.

That's set per activity — dictation, note recording and audio upload each have
their own engine under **Settings → Speech-to-Text** — and all three default
to local. [Where your voice and text go](/help/privacy/where-your-data-goes)
explains why all three matter.

<Warning>
  Adding a cloud provider key under **Settings → Cloud Providers** and pointing
  any engine or the language model at it sends that audio or text to the
  provider under its terms. If you're standing up a PHI-safe configuration,
  don't add one — or if you must, confirm each of the three tabs and the
  language model setting individually, and get a BAA from that provider, not
  from us.
</Warning>

Two more settings that belong in your own HIPAA footprint:

* **Audio Retention** keeps recordings on the PC for 30 days by default; you
  can shorten it or disable audio storage entirely.
* **Data Retention** off means nothing is saved at all — text is pasted and
  then forgotten. See [what is stored, and for how
  long](/help/privacy/what-we-store-and-for-how-long).

## FAQ

<AccordionGroup>
  <Accordion title="Is Neato Echo HIPAA compliant?">
    HIPAA compliance is a property of how an organization uses a tool, not a
    badge a product carries on its own. What we can tell you: with the default
    local setup, no PHI reaches Neato Ventures, so there's nothing for us to be
    compliant *about*. Whether the PC it runs on, the disk encryption, the
    retention settings and the people using it meet your obligations is a
    question for your compliance officer.
  </Accordion>

  <Accordion title="Do I need a BAA if we only use local mode?">
    If PHI never reaches a vendor, that vendor isn't processing it and there's
    nothing for a BAA to cover. We don't offer one. If your compliance team
    needs paperwork on file, the [privacy
    policy](https://echo.neatoventures.com/privacy.html) and [for your IT
    team](/help/privacy/for-your-it-team) describe the data flow.
  </Accordion>

  <Accordion title="What about a connected calendar?">
    A calendar connection reads event titles, times and attendees from Google
    or Microsoft. If those contain PHI, the same considerations apply as for
    using that calendar anywhere else. Neato Echo sends nothing back to them.
  </Accordion>
</AccordionGroup>

## Related

* [How Neato Echo is secured](/help/privacy/how-neato-echo-is-secured)
* [For your IT team](/help/privacy/for-your-it-team)
* [Where your voice and text go](/help/privacy/where-your-data-goes)
