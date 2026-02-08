import { MetadataRoute } from 'next';
import { getAllBlogPosts } from './lib/blog';
import { siteConfig } from './siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  const latestPostDate = blogPosts.reduce<Date>(
    (latest, post) => {
      const postDate = new Date(post.date);
      return postDate > latest ? postDate : latest;
    },
    new Date('2025-01-01')
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
