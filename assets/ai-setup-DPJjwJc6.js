const e=`# Setting up the AI

Koma's AI features are the [chat](#chat), [Hihyō-san](#hihyo) in the script, descriptions written for names in World, and Story Memory. They are optional, and everything else in Koma works without them.

All of it runs on your own computer through **Ollama**, a free app. Nothing you write is sent anywhere.

## Turning it on

1. Install Ollama from ollama.com and start it.
2. In Koma, open Settings, then **AI**, and switch it on.
3. Pick a model. If none is installed, Koma says how to get one.

If Koma cannot reach Ollama, it says what is wrong: Ollama is not installed, it has not started yet, or no model is installed.

On the website version of Koma, the page may not be allowed to reach Ollama on your computer. The desktop app does not have this problem.

## Models

One model does everything: the chat, the descriptions and Hihyō-san. A larger model writes better and answers more slowly. In Settings under AI you can also choose how replies are laid out (plain paragraphs, balanced, or headings and bullets) and adjust how the model writes.

With Koma in Japanese, pick a model that writes Japanese well, such as Qwen. Koma says when the model you picked cannot.

## Story Memory

Story Memory, in Settings, lets the AI read your whole story, so it can answer about details you wrote weeks ago: characters, boards, beats and past conversations. Switch it on and Koma prepares the story for it in the background.

## Voices

The chat and Hihyō-san can read their replies aloud. The voices also run on your computer. Koma asks before it downloads one. Each picks its voice where it speaks: in the chat, and in Hihyō-san's panel.
`;export{e as default};
