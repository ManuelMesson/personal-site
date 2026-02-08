export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why I Build for Hospitality Teams',
    date: '2025-05-20',
    excerpt: 'Service businesses move fast, and software should support that pace without adding friction.',
    content:
      'Hospitality work is high-speed and people-first. I focus on tools that reduce manual coordination, make service quality more predictable, and free teams to spend more time with guests. The best software in this space feels invisible: it helps operators act quickly without forcing them through complex flows.',
    tags: ['Hospitality', 'Operations', 'Product'],
  },
  {
    id: 2,
    title: 'Shipping a Personal Site as a Product',
    date: '2025-05-22',
    excerpt: 'Treating a personal website like a product changes the quality of every decision you make.',
    content:
      'This site is not just a portfolio page. It is an operating surface for projects, writing, and long-term ideas. Building it as a product means prioritizing reliability, clear navigation, and maintainable content structures so future updates are fast and low-risk.',
    tags: ['Web Development', 'Personal Brand', 'Execution'],
  },
];

export default blogPosts;
