const e=`# Drafts and versions

A chapter can have more than one version. **Final** is the chapter itself. A **draft** is another version of it you can try things in without touching Final.

All of this is in the version menu beside the chapter's name, above the script.

## Drafts

- **New draft:** type a name and the draft starts as a copy of the version you are in.
- Switch between Final and a draft from the same menu. The menu says which one you are editing.
- **Set as Final:** makes a draft the chapter. The old Final is kept as a draft under a name you choose.
- **Delete draft.**

To move only part of a draft into Final, select it in the script and use **Copy to Final** in the toolbar, or right-click and choose **Copy to Final**.

**Hihyō-san's drafts** lists the drafts Hihyō-san has written, when the AI is on.

## Earlier copies

As you write, Koma keeps a copy of each version, at most every fifteen minutes, and holds on to the last ten. Open **Earlier copies** from the version menu to see them, each with how it differs from the chapter now.

- **Restore this copy** puts the chapter back as it was. The chapter as it is now is kept as a copy first, and **Ctrl+Z** takes the restore back.
- **Keep as a new draft** makes the copy a draft and leaves the chapter as it is.
- **Mark changes since** puts a mark beside every block that is new or changed since that copy, while you keep writing.

## Comparing versions

**Compare with another version** shows two versions of the chapter side by side in one view, with what is only in each one marked. **Mark the changes in the script** keeps those marks while you write. Exports carry the marks while they are on. **Stop marking** above the script turns them off.
`;export{e as default};
