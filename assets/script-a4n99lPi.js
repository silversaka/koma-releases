const e=`# Writing the script

Script is where the chapter itself is written. Everything else in Koma reads from it: World finds the cast here, the counts come from here, and Panels lays a comic's pages out from here.

## Lines and their kinds

A script is made of lines, and each line has a kind, shown at its left. **Tab** changes the kind of the line you are on, and **Shift+Tab** goes back the other way. **Enter** starts the kind of line that usually comes next. **Esc** leaves the script for its toolbar.

**Comic:** Page, Panel, Setting, Action, Character, Dialogue, Thought, Caption, SFX and Note. After a character's name, Enter starts their dialogue; after the dialogue, it starts the next name.

**Novel:** Paragraph, Heading, Scene break and Note.

**Screenplay:** Scene heading, Action, Character, Parenthetical, Dialogue, Transition and Note.

A **Note** is your own remark. It is never exported, counted or shown to a reader.

**Alt+Up** and **Alt+Down** move the line you are on. A page or a panel can be dragged by its handle to move it with everything under it.

## Names

Koma learns the cast from the script. Anyone given a line of dialogue counts. To mark any other name, select it, right-click and choose **Tag as** a character, a place or another kind of name. Tagged names show up in [World](#world), and each one can have a [board](#boards). **Untag** in the toolbar removes the tag at the cursor.

## The side panel

Down the side are the chapter's pages or scenes, its cast and its counts. Click a page, a scene or a name to jump to it. In a comic, the counts say when a page has too many panels or a balloon has too many words. The limits are set in Settings, under **This story**.

## The toolbar

- **Comments:** notes on the script for yourself or the people you work with. Select some words, right-click and choose **Comment**, or press **Ctrl+Alt+M**.
- **Export:** see [Exporting](#export).
- **Copy to Final:** when you are in a draft, copies the selected pages or panels into Final. See [Drafts and versions](#drafts).
- **Zoom.**

## Finding and replacing

**Ctrl+F** finds in this chapter, and **Ctrl+H** opens replace. **Ctrl+Shift+F** looks in every chapter. Replacing across chapters keeps a backup of each one first, and **Put them back** undoes it. A word inside a tagged name is left alone unless you ask for names to change too.

## Looking up a word

Right-click a word and choose **Look up**, or press **Ctrl+Shift+L**. A card shows what it means, other words for it that replace it with a click, and how often the chapter already uses it. This is the one place Koma goes online, and it sends only that one word. **More about this word** opens the full dictionary.

## Hihyō-san

With the AI on, the face in the corner of the script is Hihyō-san, who reads the chapter and says what he sees. See [Hihyō-san](#hihyo).
`;export{e as default};
