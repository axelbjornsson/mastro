import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "Axel Björnsson",
      children: html`
        <section class="hero">
          <h1>Hi, I'm Axel Björnsson</h1>
          <p>Software developer building things for the web.</p>
        </section>
        <section class="section">
          <h2>Portfolio</h2>
          <p>Selected projects and case studies coming soon.</p>
          <a href="/portfolio">View all projects →</a>
        </section>
        <section class="section">
          <h2>Blog</h2>
          <p>Notes on development, learning, and experiments coming soon.</p>
          <a href="/blog">Read all posts →</a>
        </section>
      `,
    }),
  );
