import './globals.css';

export const metadata = {
  title: 'GymJunkiez — Strength Tracking App',
  description: 'Track workouts, build consistency, and hit strength goals. Local-first iOS app with templates, progress charts, and AI coaching.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ background: '#0E1116' }}>
      <body style={{ margin: 0, padding: 0, background: '#0E1116' }}>{children}</body>
    </html>
  );
}
