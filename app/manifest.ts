import { MetadataRoute } from 'next';
import { siteConfig } from './siteConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Manuel',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7f4',
    theme_color: '#2d5f48',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
