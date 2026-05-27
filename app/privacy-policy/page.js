export const metadata = {
  title: 'Privacy Policy — GymJunkiez',
  description: 'Privacy policy for the GymJunkiez iOS app.',
};

const SECTIONS = [
  {
    heading: 'Introduction',
    body: 'Welcome to GymJunkiez. We respect your privacy and are committed to protecting it. This privacy policy explains our practices regarding data collection when you use our iOS application.',
  },
  {
    heading: 'Information We Collect',
    body: 'We do not collect any personal data.\n\nGymJunkiez does not collect, store, or transmit any personal information from our users. All data you enter into the app stays on your device and is never sent to us or any third parties.',
  },
  {
    heading: 'Data Storage',
    body: 'Any information you enter into GymJunkiez is stored locally on your device only. We do not have access to this data, and it is not uploaded to any servers.',
  },
  {
    heading: 'Third-Party Services',
    body: 'GymJunkiez does not use any third-party analytics, advertising, or tracking services. Your usage of the app remains completely private.',
  },
  {
    heading: "Children's Privacy",
    body: 'GymJunkiez is not intended for children under 9 years of age. Since we do not collect any personal information, there is no risk of collecting data from children.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={s.page}>
      <nav style={s.nav}>
        <a href="/" style={s.brand}>
          <img src="/icon.png" alt="" width={28} height={28} style={{ borderRadius: 8, display: 'block' }} />
          GymJunkiez
        </a>
      </nav>

      <article style={s.article}>
        <header style={s.header}>
          <h1 style={s.title}>Privacy Policy</h1>
          <p style={s.subtitle}>GymJunkiez</p>
          <p style={s.date}>Last Updated: January 26, 2026</p>
        </header>

        <hr style={s.divider} />

        {SECTIONS.map(({ heading, body }) => (
          <section key={heading} style={s.section}>
            <h2 style={s.sectionHeading}>{heading}</h2>
            {body.split('\n\n').map((para, i) => (
              <p key={i} style={s.para}>{para}</p>
            ))}
          </section>
        ))}

        <section style={s.section}>
          <h2 style={s.sectionHeading}>Contact Us</h2>
          <p style={s.para}>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <a href="mailto:ngisaiah17@gmail.com" style={s.link}>
            ngisaiah17@gmail.com
          </a>
        </section>

        <hr style={s.divider} />

        <p style={s.copyright}>© 2026 GymJunkiez. All rights reserved.</p>
      </article>
    </main>
  );
}

const s = {
  page: {
    minHeight: '100vh',
    background: '#0E1116',
    color: '#F5F7FA',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: 'antialiased',
  },
  nav: {
    borderBottom: '1px solid #2B3442',
    padding: '16px 28px',
  },
  brand: {
    fontSize: 18,
    fontWeight: 700,
    color: '#F5F7FA',
    letterSpacing: '-0.02em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  },
  article: {
    maxWidth: 680,
    margin: '0 auto',
    padding: '56px 28px 80px',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#F5F7FA',
    margin: '0 0 6px',
  },
  subtitle: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: 600,
    margin: '0 0 10px',
  },
  date: {
    fontSize: 14,
    color: '#8B97A8',
    margin: 0,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #2B3442',
    margin: '32px 0',
  },
  section: {
    marginBottom: 36,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 700,
    color: '#F5F7FA',
    letterSpacing: '-0.01em',
    margin: '0 0 10px',
  },
  para: {
    fontSize: 15,
    color: '#C7CDD6',
    lineHeight: 1.75,
    margin: '0 0 12px',
  },
  link: {
    fontSize: 15,
    color: '#3B82F6',
    fontWeight: 500,
  },
  copyright: {
    fontSize: 13,
    color: '#8B97A8',
    margin: 0,
  },
};
