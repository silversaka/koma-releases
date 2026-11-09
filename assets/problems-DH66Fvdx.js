const e=`# Problems and messages

Koma would rather stop and ask than save over something it is not sure of. Most messages below mean your work is safe and Koma is waiting for you to choose.

## "Could not be saved"

A bar at the top says what could not be saved and why:

- **It changed somewhere else:** another computer, another window or a sync app changed the file since Koma read it, so Koma did not save over that change. Choose which version to keep.
- **It could not be saved:** the disk or the sync folder refused. **Try again** once it is back.

Until you answer, Koma asks before you close the window or leave the story, because those changes would be lost.

## "This chapter changed somewhere else"

The chapter was changed outside this window while it was open. If you had not changed anything since, Koma loads the new version and says so. If you had, it asks: **Load the other version** drops your latest edits, and **Keep my version** replaces the other one. Koma also keeps [earlier copies](#drafts) of each chapter as you write.

## "Couldn't be read"

A board, a chapter or another file that Koma cannot make sense of shows as empty or incomplete, with a note saying why. **Your file has not been changed**, and nothing you do there is saved until it can be read again. It may have been cut short by a sync app part way through copying, or changed by hand. Waiting for the sync app to finish and opening it again often fixes it.

## A story from a newer Koma

A story made or saved by a newer version of Koma than yours is not opened, and Koma says which version it needs. Nothing in it has been changed. Update Koma to open it. Koma checks for updates itself and offers each new version.

## A story whose folder is gone

A story in the recent list whose folder has been moved or deleted is greyed out. If the drive it is on has a different letter now, Koma finds it there. **Refresh** checks again, for example after plugging a drive in. Removing a story from the list leaves its files where they are.

## Something else is wrong

In Settings under **About**, **Copy diagnostics** copies which version of Koma you are on, whether the AI answered and the recent errors, to send to whoever helps you. The same place can show the tour, the welcome guide and the screen hints again.
`;export{e as default};
