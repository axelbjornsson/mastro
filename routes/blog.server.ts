import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "Blog — Axel Björnsson",
      children: html`
        <h1>Blog</h1>
        <p>Posts coming soon.</p>
      `,
    }),
  );
