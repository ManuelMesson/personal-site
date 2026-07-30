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
          background: 'linear-gradient(145deg, #0c0a11 0%, #131020 72%, #21173a 100%)',
          color: '#f2eff9',
          padding: '64px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 1, textTransform: 'uppercase', color: '#f0b35e' }}>Founder-Operator</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 980, fontWeight: 700 }}>I build software by directing AI agents.</div>
        <div style={{ fontSize: 30, color: '#b7b2d4' }}>{siteConfig.url.replace('https://', '')}</div>
      </div>
    ),
    size
  );
}
