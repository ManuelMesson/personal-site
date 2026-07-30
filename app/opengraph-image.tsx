import { ImageResponse } from 'next/og';
import { siteConfig } from './siteConfig';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(140deg, #f7faf7 0%, #e6efe8 100%)',
          color: '#1d2520',
          padding: '64px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 1, textTransform: 'uppercase', color: '#2d5f48' }}>Founder-Operator</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 1000, fontWeight: 700 }}>I build software by directing AI agents.</div>
        <div style={{ fontSize: 30, color: '#445046' }}>{siteConfig.url.replace('https://', '')}</div>
      </div>
    ),
    size
  );
}
