---
title: Connect Google or Microsoft calendar
description: Link your calendar so meeting notes arrive titled, with attendees filled in and a one-click join.
---
Connecting a calendar is optional — meeting recording works without it. What it
adds is context: notes that arrive already named, attendee lists that pre-fill
speaker labels, and a prompt that appears because a meeting is *scheduled*
rather than because Neato Echo heard something.

Neato Echo can connect to **Google Calendar** and to **Microsoft calendars**
(Outlook.com and Microsoft 365 work accounts). Both live under
**Settings → Integrations**, which is also reachable from **Integrations** in
the sidebar. Access is read-only in both cases.

## Google Calendar

<Steps>
  <Step title="Open Integrations">
    Open **Settings**, then **Integrations**, and find **Google Calendar**.
  </Step>

  <Step title="Connect">
    Click **Connect**. Your browser opens to a Google sign-in — pick the account
    whose calendar you want.
  </Step>

  <Step title="Get past the verification screen">
    While Neato Echo's verification with Google is pending, you'll see a page
    saying **Google hasn't verified this app**. Click **Advanced**, then
    **Go to Neato Echo**. Nothing is wrong; it's Google's standard notice for
    apps still in the review queue.
  </Step>

  <Step title="Approve read-only access">
    Approve the request to read your calendar events. Neato Echo asks for
    read-only access — it never creates, edits or deletes events.
  </Step>

  <Step title="Come back to the app">
    The browser lands on a **Connected** page at echo.neatoventures.com. You can
    close it. Back in Neato Echo, the account shows as **Connected** with its
    email address.
  </Step>
</Steps>

## Microsoft calendar

The flow is the same, with a Microsoft sign-in instead of a Google one. It works
with personal **Outlook.com** accounts and **Microsoft 365** work accounts.

<Steps>
  <Step title="Open Integrations">
    Open **Settings**, then **Integrations**, and find the **Microsoft**
    calendar card.
  </Step>

  <Step title="Connect">
    Click **Connect** and sign in to your Microsoft account in the browser.
  </Step>

  <Step title="Approve read-only access">
    Approve the request to read your calendar. As with Google, access is
    read-only.
  </Step>

  <Step title="Come back to the app">
    The browser shows the **Connected** page; the account appears as
    **Connected** in Neato Echo.
  </Step>
</Steps>

## Choosing which calendars count

Each provider has a **Sync primary calendar only** switch. Leave it on to
ignore events from calendars other people have shared with you — otherwise
colleagues' calendars can fill your list with meetings you're not in.

You can connect more than one account — **Add another calendar** repeats the
process. The panel shows one row per connected account with its email address.

## What it changes

| Without a calendar                                    | With one connected                                                |
| ----------------------------------------------------- | ----------------------------------------------------------------- |
| Prompt appears when Neato Echo hears sustained speech | Prompt also appears just before a scheduled meeting               |
| Notes start as **New note**                           | Notes take the event's title                                      |
| Speaker count starts at a default                     | Attendees pre-fill the expected speaker count                     |
| You join the call yourself                            | **Join & transcribe** opens the link and starts the note together |

The chat agent can also read your connected calendars, so you can ask it what's
coming up.

## Capturing the other side is separate

Connecting a calendar doesn't affect whether Neato Echo can hear the other
people on the call. That's handled by the bundled Windows audio helper — see
[capturing both sides of the call](/help/meetings/capture-both-sides).

## Disconnecting

In the same panel, hover over the row showing the account's email address. A
small unlink icon appears at the right-hand end of that row — click it. Nothing
on the panel is labelled "Disconnect", and the icon stays invisible until you
hover, so the row looks like it has no controls at rest.

You'll then be asked to confirm, and that dialog *is* labelled **Disconnect**.
Afterwards that calendar stops producing meeting prompts and stops filling in
titles and attendees; notes you already recorded are untouched.

<Note>
  Disconnecting is the right move if you connected a work account and are
  leaving, or if you'd rather Neato Echo didn't read a calendar at all. It
  doesn't disable meeting recording — the microphone-based prompt and the
  Meeting Mode Hotkey keep working.
</Note>

## Related

* [How meeting detection works](/help/meetings/how-meeting-detection-works)
* [Record a meeting](/help/meetings/record-a-meeting)
* [Where your data goes](/help/privacy/where-your-data-goes)
