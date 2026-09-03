# MangakaPro — releases

Downloads and the auto-update manifest for MangakaPro, a desktop writing suite for manga and
comics. **There is no source code in this repository** — it exists only so the app can fetch its
own updates, which requires a publicly reachable URL.

## Installing

Grab `MangakaPro_<version>_x64-setup.exe` from the [latest release](../../releases/latest).

Windows will show a blue **"Windows protected your PC"** warning, because the installer isn't
signed with a paid certificate. Click **More info**, then **Run anyway**.

Once installed, the app checks for new versions on its own and offers them to you — you only have
to do this by hand once.

## What `latest.json` is

The update manifest the app reads. Each release carries a signature that the app verifies against
a key built into it, so a tampered download is rejected. Nothing to do with it by hand.

---

**MangakaPro is freeware.** It costs nothing and always will. Use it for anything, including work
you sell — what you write is yours entirely. Pass it on to anyone, unchanged and free.

The source code is not published. Full terms ship with the app as `LICENSE`.
