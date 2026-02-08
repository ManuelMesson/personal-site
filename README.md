# Personal Site

Personal website built with Next.js App Router. It currently includes:

- Single-page home experience with anchored sections (`About`, `Projects`, `Blog`, `Contact`)
- Blog index at `/blog`
- Static blog post pages at `/blog/[id]`
- SEO metadata, `robots.txt`, and dynamic sitemap generation

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Content

- Blog posts are stored in `app/data/blogPosts.ts`
- Global site metadata is in `app/siteConfig.ts`
