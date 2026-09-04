---
title: Speaker labels
description: How Neato Echo works out who said what, how to correct it, and how to turn it off for a recording.
---
In a meeting note, Neato Echo separates the voices and labels who said what.
Labels appear live and are refined once the call ends, so the finished transcript
is more accurate than what you watch scroll past.

## Where the work happens

Speaker identification runs **on your own PC**. The models it needs — a
segmentation model and a voice-embedding model — download automatically the
first time you use the feature, and everything after that is local.

That means the call audio never leaves your machine to get labelled, and the
labels aren't a cloud feature you're waiting on.
[Where your data goes](/help/privacy/where-your-data-goes) has the full picture.

## Turning it on or off for good

The master switch is **Identify and label speakers**, and it's on by default.

Open **Settings**, then **Speech-to-Text**, and pick the **Note Recording**
tab — the toggle sits underneath the engine options. Switch it off and
transcripts show "You" and "Others" instead of named speakers, as the setting
itself says.

<Note>
  It's on the **Note Recording** tab specifically, alongside the engine used for
  meetings — not in a section of its own. If you're looking for a "Meetings"
  section in Settings, there isn't one.
</Note>

## Controls during a recording

You can also override the setting for a single meeting without changing it
globally. The pill at the top of the transcript carries the controls:

| Control                           | What it does                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Speaker identification toggle** | Turns labelling off for **this recording only**. The transcript falls back to "You" and "Them", split by whether the audio came from your microphone or from the call |
| **Expected speaker count**        | A stepper reading *"1 other in call"*. Nudge it up when more people join                                                                                              |

The count is a hint, not a limit you have to get right. When the note came from a
calendar event, the attendee list pre-fills it. Neato Echo supports up to **8**
speakers in a recording and starts from an assumption of **2**.

<Note>
  Getting the count roughly right genuinely helps. Setting it far too high is how
  you end up with phantom speakers — one person split across three labels.
</Note>

## Naming people

Labels start as **Speaker 1**, **Speaker 2** and so on. Click one and type a
name to replace it. If the meeting came from a calendar event, its attendees are
offered as suggestions, and people you've named before appear under **Known
speakers**.

Once you name someone, that voice can carry the same name into later meetings
rather than starting from scratch each time.

Labels also carry a state, which tells you how much to trust them:

| State           | Meaning                                            |
| --------------- | -------------------------------------------------- |
| **Provisional** | Assigned live, still subject to change             |
| **Suggested**   | Neato Echo thinks it knows who this is             |
| **Confirmed**   | You named it                                       |
| **Locked**      | Fixed, and won't be reassigned by later processing |

## Fixing a wrong label

Select the mislabelled segments and assign the right person. You can select
several at once — the toolbar shows *"3 selected"* with an **Assign to…**
action, which is much faster than correcting line by line.

Corrections you make are treated as confirmed, so post-processing won't undo
them.

## If the labels look wrong mid-call

Give it until the end. Live labelling works from a fraction of the audio; the
refinement pass at the end of the call sees the whole recording and regroups the
voices properly. The app says so itself while recording: *"Still identifying
speakers. Labeling accuracy will improve once the call ends."*

Things that genuinely hurt accuracy, in rough order:

1. **Everyone on one microphone in a room.** Voices sharing a channel are the
   hardest case there is.
2. **A speaker count set far from reality.**
3. **Heavy crosstalk.** People talking over each other blurs the boundaries.
4. **Only capturing your own microphone.** If the other side was never recorded,
   there's nothing to label — see
   [capturing both sides of the call](/help/meetings/capture-both-sides).

## Turning it off

Two levels, depending on what you want:

| Scope                   | Where                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Every recording**     | **Settings** → **Speech-to-Text** → **Note Recording** tab → **Identify and label speakers** |
| **This recording only** | The toggle on the recording pill                                                             |

Either way the transcript still captures everything — it just labels by source,
"You" for your microphone and "Them" for the call, instead of by voice.

<Note>
  There's no separate cost to leaving speaker labels on and nothing to sign up
  for — the models run locally on your PC.
</Note>

## Related

* [Record a meeting](/help/meetings/record-a-meeting)
* [Capturing both sides of the call](/help/meetings/capture-both-sides)
* [Where your data goes](/help/privacy/where-your-data-goes)
