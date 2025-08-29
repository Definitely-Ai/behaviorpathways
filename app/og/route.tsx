import { ImageResponse } from 'next/og'
import { site } from '@/content/site'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1220',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 80,
        }}
      >
        <div>{site.name}</div>
        <div style={{ fontSize: 40 }}>{site.tagline}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
