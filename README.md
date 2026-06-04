# Personal Website

A minimal personal academic website.

## Structure
- `index.html`: Main profile page (Bio, Interests, Contact).
- `curriculum.html`: Detailed list of courses (linked from homepage).
- `notes.html`: Long-form notes / essays (订阅).
- `library.html`: Downloadable notes library, organized by subject folders.
- `assets/js/data.js`: Contains all text data (Bio, Courses, Projects) for easy editing.
- `assets/js/library-data.js`: **Auto-generated** manifest of the notes library — do not edit by hand.
- `scripts/build-library.js`: Scans `library/` and regenerates `library-data.js`.
- `assets/css/style.css`: Custom minimalist styles.

## How to Edit

### content
Open `assets/js/data.js` to modify your:
- **Bio**: Under `profile`.
- **Courses**: Under `curriculum`.
- **Projects/Interests**: Under `projects` (if used).

### Styles
Edit `assets/css/style.css` to change fonts, colors, or layout.

### Publishing downloadable notes (笔记资料库)
The `library.html` page lists downloadable study notes, where **each subject folder under `library/` is one collection**. The site is fully static, so the file list is baked into `assets/js/library-data.js` by a scan script.

To add or update notes:
1. Put (or remove) files inside `library/<合集名>/` — e.g. `library/西方哲学史/讲义.pdf`. Any format works (md / pdf / docx / pptx ...).
2. **Run `node scripts/build-library.js` every time you change files in `library/`.** This regenerates `library-data.js`; if you skip it, the page will NOT reflect your changes.
3. Commit and push (`git add . && git commit && git push`) — include both your files and the regenerated `library-data.js`.

Optional: add a `_meta.json` inside a collection folder with `{ "title": "...", "desc": "..." }` to override the displayed title/description (the folder name is used by default). The `.nojekyll` file at the repo root keeps GitHub Pages from filtering such files.
