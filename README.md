# Web Development 2 — Assignment 1: Personal Resume Website

**Student:** Christian Aron C. Cabusas  
**Program:** Bachelor of Science in Computer Science — Laguna College  

---

## 1. Self-Rating (1 to 4)

*Scale: 1 = never used it, 2 = seen it, 3 = can do it, 4 = could teach it*

| Skill / Topic | Rating (1–4) | Notes |
| :--- | :---: | :--- |
| **HTML** | 3 | Comfortable structuring semantic pages with headers, tables, lists, and forms. |
| **CSS** | 3 | Can style layouts with Flexbox, CSS variables, media queries, and print styles. |
| **JavaScript** | 3 | Can manipulate the DOM, render arrays dynamically, handle events, and validate forms. |
| **Git** | 3 | Familiar with committing, pushing, and managing repositories on GitHub. |
| **SQL** | 2 | Have seen and practiced basic queries in coursework, still building deeper fluency. |
| **Building a Full Web App** | 2 | Understand the front-end pieces well and currently learning how to connect full back-end systems. |

*(Note: Feel free to adjust any rating number above before submitting if you want it to reflect a different personal rating.)*

---

## 2. Explain Your Code

### (1) Pick one CSS rule you wrote and explain what it does
I wrote the `.nav-container` rule using `display: flex; justify-content: space-between; align-items: center;` to arrange the navigation links and the theme toggle button in a single horizontal row. The `justify-content: space-between` property pushes the navigation list to the left side and the dark mode button to the far right, while `align-items: center` keeps them vertically aligned. I also paired it with `max-width: 820px` and `margin: 0 auto` so the navigation bar stays centered and matches the width of the main resume content below it.

### (2) Explain how your theme toggle works
In `styles.css`, I defined all page colors as CSS variables inside `:root` for the default light theme and created a second set of color values under the `body.dark-theme` selector. In `script.js`, I attached a `click` event listener to the `#theme-toggle` button that runs `document.body.classList.toggle("dark-theme")`. Every time the button is clicked, JavaScript adds or removes the `dark-theme` class on the `<body>` tag and updates the button text between `"Dark Mode"` and `"Light Mode"`.

### (3) What was the hardest part, and how did you solve it?
The hardest part was designing the `@media print` rules so the entire website prints neatly onto a single A4 page without cutting off any information. On screen, the resume has generous spacing, a sticky navigation bar, a contact form, and a collapsed certifications section that hides details until clicked. I solved this inside `@media print` by hiding interactive-only elements (`.site-nav`, `.no-print`, and `#toggle-details-btn`), forcing `#extra-experience` to display with `display: block !important` so no resume content is missing on paper, and tightening the font sizes and margins so everything fits cleanly on one page.

---

## 3. AI Disclosure

I used an AI assistant (Google Antigravity / Gemini) to help plan the editorial layout, organize the CSS custom properties and `@media print` one-page stylesheet, and structure the DOM manipulation code in `script.js`. I reviewed the HTML, CSS, and JavaScript code to make sure my personal resume details.
