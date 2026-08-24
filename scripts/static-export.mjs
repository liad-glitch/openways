// Renders the built TanStack Start app into a static site for GitHub Pages.
// Boots the Node server bundle produced by `STATIC_EXPORT=1 vite build`,
// fetches each route, and writes the HTML into .output/public.
import { spawn } from "node:child_process";
import { mkdir, writeFile, copyFile, access } from "node:fs/promises";
import path from "node:path";

const ROUTES = ["/"];
const PORT = process.env.STATIC_EXPORT_PORT ?? "3123";
const PUBLIC_DIR = path.resolve(".output/public");
const SERVER_ENTRY = path.resolve(".output/server/index.mjs");

const server = spawn(process.execPath, [SERVER_ENTRY], {
  env: { ...process.env, PORT, HOST: "127.0.0.1", NODE_ENV: "production" },
  stdio: ["ignore", "inherit", "inherit"],
});

const base = `http://127.0.0.1:${PORT}`;

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(base + "/", { redirect: "manual" });
      if (res.status < 500) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Static export: server did not start in time");
}

try {
  await waitForServer();

  for (const route of ROUTES) {
    const res = await fetch(base + route);
    if (!res.ok) throw new Error(`Static export: ${route} returned ${res.status}`);
    const html = await res.text();
    if (!html.includes("<div") && !html.includes("<body")) {
      throw new Error(`Static export: ${route} returned empty HTML`);
    }
    const outFile =
      route === "/"
        ? path.join(PUBLIC_DIR, "index.html")
        : path.join(PUBLIC_DIR, route.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html, "utf8");
    console.log(`Static export: wrote ${path.relative(process.cwd(), outFile)}`);
  }

  // SPA fallback so deep links / unknown paths still boot the client router.
  await copyFile(path.join(PUBLIC_DIR, "index.html"), path.join(PUBLIC_DIR, "404.html"));

  // GitHub Pages: skip Jekyll processing (keeps _-prefixed files) and keep the domain.
  await writeFile(path.join(PUBLIC_DIR, ".nojekyll"), "", "utf8");
  const cname = process.env.PAGES_CNAME;
  if (cname) await writeFile(path.join(PUBLIC_DIR, "CNAME"), `${cname}\n`, "utf8");

  await access(path.join(PUBLIC_DIR, "index.html"));
  console.log("Static export: done");
} finally {
  server.kill("SIGTERM");
}
