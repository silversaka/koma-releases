const e=`# Chapters

The Chapters screen lists the story's chapters in order. It opens when you open a story, and **Chapters** at the top of the rail brings it back.

## The story's name

The story's name is at the top of the list. The pencil beside it renames the story. The folder on disk keeps its old name, and Koma says so under the title. On the desktop app you can copy the folder's path from there.

## Making and changing chapters

- **New chapter** at the top adds the next chapter to the list. Type a name in the box beside it first to choose the name yourself. Click a chapter to open it.
- Each chapter has buttons to **move it up** or **down**, **rename** it, **duplicate** it and **delete** it. Deleting a chapter also deletes its drafts and its panels, and it cannot be undone.
- **Details** shows a chapter's title, status and summary. The status is your own word for where it is, such as draft, revised or final.

The **Pages** or **Scenes** tab beside **Chapters** lists every page or scene of the story, with the chapter it is in.

## Bringing in a script you already have

**Import a script from a file** (for a comic) or **Import a chapter from a file** (for a novel or a screenplay) makes a new chapter from a file written somewhere else:

- A comic script from a text, Markdown or Word (.docx) file, or a Fountain screenplay. Koma finds the pages, panels, captions, sound effects and balloons. Pages written as "PAGE ONE", "Page 1" or "1P" and panels written as "Panel 1" are recognised.
- A novel chapter from Markdown, text or Word. Paragraphs, headings and \`***\` scene breaks come through as they are.
- A screenplay from Fountain, text or Word. Scene headings start with INT. or EXT., or with a dot.

Koma shows what it found before anything is made. An older Word file (.doc) needs saving as .docx first.

## Two copies of one chapter

If two computers saved the same chapter at the same moment, the sync app may keep both. Koma lists both and says which is the copy. Open each, keep the one you want and delete the other.
`;export{e as default};
