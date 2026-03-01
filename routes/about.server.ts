import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "About — Axel Björnsson",
      children: html`
        <h1>About</h1>
        <p>More about me coming soon.</p>
      `,
    }),
  );
