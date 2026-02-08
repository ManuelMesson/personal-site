import { ImageResponse } from 'next/og';
import { siteConfig } from './siteConfig';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#1d2520',
          color: '#f6f7f4',
          padding: '64px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 1, textTransform: 'uppercase', color: '#8ab39e' }}>Manuel Messon-Roque</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 980, fontWeight: 700 }}>SaaS, hospitality, and execution-focused writing.</div>
        <div style={{ fontSize: 30, color: '#c6d2cb' }}>{siteConfig.url.replace('https://', '')}</div>
      </div>
    ),
    size
  );
}
