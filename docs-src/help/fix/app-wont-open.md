---
title: Neato Echo won't open
description: Installed but no window appears, the app seems to be running invisibly, or the dictation panel is off-screen.
---
You launch Neato Echo and nothing appears. Sometimes it's genuinely not
starting; more often it *is* running and you can't see it.

## Check the system tray first

Neato Echo runs from the tray, so the main window not being on screen is normal.

Click the `^` caret at the right of the taskbar to show hidden icons, and look
for the Neato Echo icon there. From the tray icon you can show the dictation
panel and open Settings.

## If it's genuinely not starting

The process appears in Task Manager but no window ever shows.

<Steps>
  <Step title="Try disabling GPU acceleration">
    Some graphics drivers stop Electron applications rendering at all. Right-click
    the Neato Echo shortcut, choose **Properties**, and add `--disable-gpu` to
    the end of the **Target** field (after the closing quote), then launch from
    that shortcut.

    If that works, the graphics driver is the cause — updating it is the real
    fix.
  </Step>

  <Step title="Launch with debug logging">
    In the same way, add `--log-level=debug` to the shortcut's **Target** and
    launch again.

    Logs are written to `%APPDATA%\neato-echo\logs`. Send us the newest one.
  </Step>

  <Step title="Check your antivirus">
    Security software can quarantine parts of the app silently. See
    [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo).
  </Step>

  <Step title="Reinstall cleanly">
    Uninstall, then remove the leftover data directories, then reinstall:

    ```batch theme={null}
    rd /s /q "%APPDATA%\neato-echo"
    rd /s /q "%USERPROFILE%\.cache\neato-echo"
    ```

    <Warning>
      This deletes local settings, notes, history and any downloaded models.
      Nothing is backed up anywhere else, so export any notes you want to keep
      first — see [Export your notes](/help/notes/export-your-notes). If you
      only want a fresh app and not a fresh start, skip the second line and your
      models stay put.
    </Warning>
  </Step>
</Steps>

## The panel is off-screen

If dictation works but you can't see the panel — usually after unplugging an
external monitor — restart the app. That resets the panel's position. You can
then drag it wherever you want it.

## If you get a startup error

Neato Echo shows a **Startup Error** or **failed to load** dialog with an error
code when it can't start properly. Send us that exact message; it names the
failure directly and saves a round of questions.

## Related

* [Antivirus blocks Neato Echo](/help/fix/antivirus-blocks-neato-echo)
* [Updates and reinstalling](/help/fix/updates-and-reinstalling)
* [Windows](/platform/windows)
