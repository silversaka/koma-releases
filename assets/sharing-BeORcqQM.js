const e=`# Your story on more than one computer

There are three ways to have a story somewhere other than this computer. They can be used together.

## A cloud folder

Keep the story in a folder that OneDrive, Google Drive, Dropbox or iCloud Drive already syncs, and every computer signed in to that account has it. Koma offers this when you make a story, if one of them is installed. A story you already have can be moved into one from Settings, under **This story**.

The sync app does the copying. If two computers change the same chapter at the same moment, it may keep both, and Koma shows both in the chapter list so you can keep one.

## Google Drive in the browser

The website version of Koma can keep a story in your Google Drive with no Drive app installed, so it opens from any browser you sign in to. Press **Google Drive** on the opening screen to sign in. Koma lists the stories it finds there.

## Working together live

Two or more people can write in the same chapter at the same time, each seeing where the others are, and leave [comments](#script) for each other. Chapters, boards, beats and World are shared. Conversations in Chat are not.

This goes through a **relay**: a small server that passes the changes between you and keeps a copy. Someone has to run one. To set it up, open Settings, then **Working together**:

1. Give **Your name**. It shows beside your cursor.
2. Fill in the **Relay address** and the **Relay key**.
3. Switch on **Share this story live** for the open story.

To bring someone in, copy **Your invitation** and send it to them the way you would a password, since it carries the key. They choose **Paste an invitation** and are pointed at the same relay.

If the relay cannot be reached, keep writing. Koma catches up when it can.

## Copies of a story

A copy of a story's folder carries the same identity as the story it was copied from, and two stories with one identity share everything when working together. When Koma opens one of two such stories, it asks: **Is this a copy of another story?** Answer **It is a copy** and it gets an identity of its own, with sharing off until you switch it on.
`;export{e as default};
