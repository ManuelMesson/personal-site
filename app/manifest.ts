import { MetadataRoute } from 'next';
import { siteConfig } from './siteConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Manuel',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0a11',
    theme_color: '#8b7cf8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
