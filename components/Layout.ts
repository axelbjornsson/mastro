import { type Html, html } from "@mastrojs/mastro";

interface Props {
  children: Html;
  title: string;
}

export const Layout = (props: Props) =>
  html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${props.title}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <header>
          <a href="/" class="site-name">Axel Björnsson</a>
          <nav>
            <a href="/portfolio">Portfolio</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>
          ${props.children}
        </main>
      </body>
    </html>
  `;
