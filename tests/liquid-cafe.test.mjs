import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('Liquid Café canonical tokens replace the template skin in both roasts', async () => {
  const css = await readSource('app/globals.css');

  for (const token of ['#0c0a11', '#131020', '#f6f1e9', '#ece2d3', '#8b7cf8', '#6a58e8', '#f0b35e', '#b0742a']) {
    assert.match(css, new RegExp(token, 'i'), `missing Liquid Café token: ${token}`);
  }

  assert.match(css, /--radius-card:\s*20px/);
  assert.match(css, /--radius-button:\s*14px/);
  assert.match(css, /--radius-pill:\s*999px/);
  assert.match(css, /transform:\s*scale\(0\.965\)/);
  assert.match(css, /backdrop-filter:\s*blur/);
  assert.doesNotMatch(css, /#2d5f48|#1f4a37|Iowan Old Style|Palatino Linotype|Book Antiqua/i);
});

test('the roast toggle honors system light mode and persists an explicit choice', async () => {
  const [css, layout, toggle] = await Promise.all([
    readSource('app/globals.css'),
    readSource('app/layout.tsx'),
    readSource('app/ThemeToggle.tsx'),
  ]);

  assert.match(css, /@media \(prefers-color-scheme: light\)/);
  assert.match(css, /:root:not\(\[data-theme\]\)/);
  assert.match(css, /:root\[data-theme="latte"\]/);
  assert.match(layout, /localStorage\.getItem\('liquid-cafe-theme'\)/);
  assert.match(layout, /document\.documentElement\.dataset\.theme/);
  assert.match(toggle, /localStorage\.setItem\(THEME_STORAGE_KEY, nextTheme\)/);
  assert.match(toggle, /currentTheme === 'latte' \? 'espresso' : 'latte'/);
});

test('the personal-site translation keeps one reading column and project cards as handles', async () => {
  const [css, projects] = await Promise.all([readSource('app/globals.css'), readSource('app/components/ProjectsSection.tsx')]);

  assert.match(css, /\.card-grid\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s);
  assert.match(css, /\.project-card \.read-link::after\s*\{[^}]*inset:\s*0/s);
  assert.match(projects, /className="card project-card"/);
  assert.match(projects, /https:\/\/landed-cz99\.onrender\.com/);
  assert.match(projects, /https:\/\/github\.com\/ManuelMesson\/shelves/);
});
