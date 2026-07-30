import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the home page tells the approved current story', async () => {
  const [home, about, projects, config] = await Promise.all([
    readSource('app/components/HomeSection.tsx'),
    readSource('app/components/AboutSection.tsx'),
    readSource('app/components/ProjectsSection.tsx'),
    readSource('app/siteConfig.ts'),
  ]);
  const currentStory = [home, about, projects, config].join('\n');

  for (const fact of [
    'Founder-Operator',
    'directing AI agents',
    'PopoSoft',
    'March 2026',
    'one human',
    'nine years',
    '100–150',
    'Amazon engineers and product managers',
    'Day 1 HQ café',
  ]) {
    assert.match(currentStory, new RegExp(fact), `missing approved fact: ${fact}`);
  }
});

test('the project cards use the supplied public proof links', async () => {
  const projects = await readSource('app/components/ProjectsSection.tsx');

  assert.match(projects, /https:\/\/landed-cz99\.onrender\.com/);
  assert.match(projects, /https:\/\/github\.com\/ManuelMesson\/shelves/);
  assert.match(projects, /https:\/\/github\.com\/ManuelMesson/);
  assert.match(projects, /rel="noopener noreferrer"/);
});

test('retired positioning and placeholders do not remain on current-story surfaces', async () => {
  const currentStory = (
    await Promise.all([
      readSource('app/components/HomeSection.tsx'),
      readSource('app/components/AboutSection.tsx'),
      readSource('app/components/ProjectsSection.tsx'),
      readSource('app/siteConfig.ts'),
      readSource('app/layout.tsx'),
      readSource('app/page.tsx'),
      readSource('app/opengraph-image.tsx'),
      readSource('app/twitter-image.tsx'),
    ])
  ).join('\n');

  for (const retiredCopy of [
    'Product Builder',
    'hospitality and service businesses',
    'Hospitality Ops SaaS',
    'Personal Publishing Platform',
    'case study coming soon',
    'coffee businesses',
    'hospitality tech',
  ]) {
    assert.doesNotMatch(currentStory, new RegExp(retiredCopy, 'i'), `retired copy remains: ${retiredCopy}`);
  }
});
