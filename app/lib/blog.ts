import { cache } from 'react';
import blogPosts from '../data/blogPosts';

const blogPostsById = new Map(blogPosts.map((post) => [post.id, post] as const));

export const getAllBlogPosts = cache(() => blogPosts);

export const getLatestBlogPosts = cache((limit: number) => blogPosts.slice(0, Math.max(0, limit)));

export const getBlogPostById = cache((id: number) => blogPostsById.get(id));
