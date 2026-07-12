# AO3 Comment Previewer

A browser tool that shows you exactly how a comment will render on AO3 before you post it. Paste rich text or raw HTML in, get a live sanitized preview out, no surprises, no broken tags. All client-side, nothing is ever uploaded anywhere.

## Use it online

### [Launch the AO3 Comment Previewer](https://ninineen.github.io/ao3-comment-previewer-app/)

No installation needed. It runs entirely in your browser, and your comment text is never uploaded.

---

## Connect with me

**Support my work:** [Buy me a coffee on Ko-fi](https://ko-fi.com/ninineen)

I make AO3 skins, stream on Twitch, and post fandom content across socials. Find me here:

<p align="left">
  <a href="https://archiveofourown.org/users/ninineen/profile" target="_blank"><img src="https://img.shields.io/badge/AO3-990000?style=flat-square&logo=archiveofourown&logoColor=white" alt="AO3"></a>
  <a href="https://twitch.tv/ninineen" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=flat-square&logo=twitch&logoColor=white" alt="Twitch"></a>
  <a href="https://bsky.app/profile/ninineen.bsky.social" target="_blank"><img src="https://img.shields.io/badge/Bluesky-0285FF?style=flat-square&logo=bluesky&logoColor=white" alt="Bluesky"></a>
  <a href="https://ko-fi.com/ninineen" target="_blank"><img src="https://img.shields.io/badge/Ko--fi-F16061?style=flat-square&logo=kofi&logoColor=white" alt="Ko-fi"></a>
  <a href="https://discord.gg/ninineen" target="_blank"><img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
</p>

---

## What it does

Paste or drop in your comment's HTML (or write it fresh in the rich text editor), and see a sanitized live preview of exactly how AO3 will render it, styled with AO3's own comment chrome. Switch to the Source tab to check or copy the raw HTML. Anything AO3 would strip on its end gets flagged so you know before you post.

Extracted from `disco-elysium-css-formatter` (formerly `uc41-html-formatted-chapters`), where it originally lived alongside an unrelated chapter-formatting tool.

---

## Usage

### Run the web app

**[Use it online](https://ninineen.github.io/ao3-comment-previewer-app/)**: no install needed, runs entirely in your browser, nothing is ever uploaded anywhere.

Or run it locally:

```bash
npm install
npm start      # build + serve locally
```

### Run tests

```bash
npm test
```

### Build / deploy to GitHub Pages

```bash
npm run deploy
```

---

## License

ISC.
