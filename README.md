This is a TypeScript portfolio + blog built with [Mastro](https://mastrojs.github.io) and [Bun](https://bun.sh).

## � Getting Started

### Prerequisites
- [Bun](https://bun.sh) runtime installed

### Development

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run start
   ```
   Open http://localhost:8000 to view your site.

3. Generate static site:
   ```bash
   bun run generate
   ```
   Output will be in the `generated/` folder.

4. Type check:
   ```bash
   bun run check
   ```

## 📂 Project Structure

- `routes/*.server.ts` - Server routes (pages, APIs)
- `components/*.ts` - Reusable components
- `routes/styles.css` - Global styles
- `ai/` - AI context documentation

## 🔧 One-time setup (VS Code)

1. Click **Install** in the small dialog in the bottom right that says "Do you want to install the recommended extensions from mastro and FAST for this repository?"
2. Click **Trust Publishers & Install**
3. Close the two tabs of the just installed extensions ([Mastro](https://marketplace.visualstudio.com/items?itemName=mastro.mastro-vscode-extension) and [FAST Tagged Template Literals](https://marketplace.visualstudio.com/items?itemName=ms-fast.fast-tagged-templates)) and switch back to the _Explorer_ view by clicking the topmost icon ⧉ in the activity bar on the left. Now you should see your files and folders again.


## 👨‍🍳 Open the Mastro preview pane

On your keyboard, hit `Ctrl-Shift-P` (Windows or Linux) or `Command-Shift-P` (Mac), type `mastro`, and when the _mastro: Preview and Generate Website_ item appears, hit enter.

Try to remember how to open the Mastro preview pane, as you might sometimes close it.

<details>
<summary>Using Firefox?</summary>

In Firefox, this keyboard shortcut unfortunately opens a new incognito window. Instead, you need to hit `Ctrl-P` (Windows or Linux) or `Command-P` (Mac) and type `>mastro` (note the `>`).
</details>


## 👷 Create your own repository

While you can play around in the template repository, if you want to save your changes, you need to create your own copy of the repo. If you haven't done so already:

1. Open [this template's GitHub repo](https://github.com/mastrojs/template-basic)
2. Click the green button **Use this template** on the top right, select **Create a new repository** and choose a name for your project. (To deploy to GitHub Pages for free, your repo needs to be public.)
2. On your repo's GitHub page, press `.` on your keyboard to again open _Visual Studio Code for the Web_.


## 🚀 Next steps

### 🤔 Guide

Congratulations! If the above worked, you can skip the "Setup" chapter of the [**Mastro guide**](https://mastrojs.github.io/guide/) and continue with learning [HTML](https://mastrojs.github.io/guide/html/), [CSS](https://mastrojs.github.io/guide/css/), or [JavaScript](https://mastrojs.github.io/guide/javascript/).
Or if you know that already, jump to:

- [Publish your website to GitHub Pages](https://mastrojs.github.io/guide/publish-website/)
- [Client-side vs server-side JavaScript, SPA vs MPA](https://mastrojs.github.io/guide/client-side-vs-server-side-javascript-static-vs-ondemand-spa-vs-mpa/)
- [Mastro components and routing](https://mastrojs.github.io/guide/server-side-components-and-routing/)
- [Build a static blog from markdown files](https://mastrojs.github.io/guide/static-blog-from-markdown-files/)

### 📋 Docs

For a condensed overview of the Mastro web framework and static site generator, consult the [**Mastro Docs**](https://mastrojs.github.io/docs/).

### ❤️ Community

We're looking to build an inclusive community, where people of all kinds of backgrounds and experience levels feel welcome and safe, and help each other out. A place to ask questions and learn new things.

Do you have a question, need help, or want to talk about future plans? [**Start a GitHub discussion**](https://github.com/mastrojs/mastro/discussions/new/choose)

Something not working as expected? We consider that a bug. [**Open a GitHub issue**](https://github.com/mastrojs/mastro/issues/)

