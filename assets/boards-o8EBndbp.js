const e=`# Boards

A board is a canvas for anything that will not sit in a script: sketches, references, notes, links, checklists and files. Make one for each character or place, or one for thinking.

## The Boards screen

**Boards** on the rail lists the story's boards in columns. A board tagged as a character, a place or another kind of name sits in that kind's column; the rest are in **Unsorted**. Drag a board into another column to file it there. **Add column** makes a lane of your own.

To make a board, type a name in the box at the top, pick what it starts from (**Blank**, or a template such as a character profile) and click **New board**. With the box empty, it is called Untitled board. The new board opens straight away.

Each board can be made a favourite, archived, renamed or deleted from its card. **Board details** shows its name and what it is connected to. **Show archived** brings archived boards back into view.

A board for a name in the script is also made from [World](#world), with **Create board**.

## Cards

The toolbar down the left adds cards:

- **Note:** text. See "Writing in a note" below.
- **Link:** a web address.
- **To-do:** a checklist.
- **Board:** a link to another board, or **New board inside this one**. A board made inside another lives on its canvas, and the board's title shows the way back.
- **Color:** a colour swatch.
- **Image:** a picture. **Upload** attaches any file. A PDF, a text file or a picture opens over the board with a double-click.
- **Beat:** a story beat, which can be linked to a chapter. See [Beats](#beats).
- **Line:** click one card, then another, to connect them. A connection can have a label.

**Copy** duplicates the selected cards and **Trash** deletes them. A deleted card can be brought back with **Undo** for a few seconds, and **Ctrl+Z** undoes any change.

## Moving around

Drag the background to move around the board, and use the mouse wheel to zoom. Hold **Shift** and drag to select several cards at once, and click the scroll wheel to drop the selection. A card is resized from its bottom-right corner.

From the keyboard, **Tab** reaches the cards, the arrow keys move the selected card, **Alt** with the arrows resizes it, and **L** starts a connection from it.

## Writing in a note

A note understands a few marks typed at the start of a line, followed by a space:

| Type | To get |
| --- | --- |
| \`# \` | A large heading |
| \`## \` to \`###### \` | Smaller headings |
| \`- \` or \`* \` | A bulleted list |
| \`1. \` | A numbered list |
| \`> \` | A quote |

**Ctrl+B** makes the selected words bold, **Ctrl+I** italic. See [Formatting](#formatting) for the whole list.

## Sending a board to the chat

With the AI on, **Send to chat** gives the whole board to a conversation, so it reads it before it answers. See [Chat](#chat).
`;export{e as default};
