import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
  htmlToResponse(
    Layout({
      title: "Portfolio — Axel Björnsson",
      children: html`
        <h1>Portfolio</h1>
        <p>Projects and case studies coming soon.</p>
      `,
    }),
  );
