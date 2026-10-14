import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = '/Karen-Dinalli-Portfolio/';

function prefixPublicAssets(base: string): Plugin {
  return {
    name: 'prefix-public-assets',
    apply: 'build',
    transform(code, id) {
      if (base === '/') return;
      if (id.includes('node_modules')) return;
      if (!/\.[jt]sx?$/.test(id)) return;

      const next = code
        .replaceAll('"/images/', `"${base}images/`)
        .replaceAll("'/images/", `'${base}images/`)
        .replaceAll('"/icons/', `"${base}icons/`)
        .replaceAll("'/icons/", `'${base}icons/`)
        .replaceAll('href="/projects"', `href="${base}projects"`)
        .replaceAll("href='/projects'", `href='${base}projects'`)
        .replaceAll('href:"/projects"', `href:"${base}projects"`)
        .replaceAll('href: "/projects"', `href: "${base}projects"`)
        .replaceAll('href="/about"', `href="${base}about"`)
        .replaceAll("href='/about'", `href='${base}about'`)
        .replaceAll('href:"/about"', `href:"${base}about"`)
        .replaceAll('href: "/about"', `href: "${base}about"`);

      return next === code ? undefined : next;
    },
  };
}

export default defineConfig(({ command }) => {
  const base = command === 'build' ? repoBase : '/';

  return {
    plugins: [react(), prefixPublicAssets(base)],
    base,
  };
});
