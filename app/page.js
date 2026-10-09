const APP_STORE_URL = 'https://apps.apple.com/us/app/gymjunkiez/id6758291402';

/* ── Inline SVG icons ──────────────────────────────────────────────────── */

function IconBarbell() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4M6 9h12M6 15h12"/>
    </svg>
  );
}
function IconGrid() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  );
}
function IconTrend() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
function IconApple() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

/* ── Features data ─────────────────────────────────────────────────────── */

const FEATURES = [
  { icon: <IconBarbell />, title: 'Track every lift', body: 'Log weight, reps, sets, and units. Bodyweight and custom exercises supported.' },
  { icon: <IconGrid />,    title: 'Build templates', body: 'Create reusable workout plans and launch sessions in one tap.' },
  { icon: <IconTrend />,   title: 'Measure progress', body: 'PR history, weight progression charts, and weekly consistency streaks.' },
  { icon: <IconTarget />,  title: 'Hit your goals', body: 'Set strength targets, track estimated 1RM, and celebrate milestones.' },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <header style={s.nav}>
        <div className="section" style={s.navInner}>
          <span style={s.brand}>
            <img src="/icon.png" alt="" width={28} height={28} style={s.brandIcon} />
            GymJunkiez
          </span>
          <a href={APP_STORE_URL} className="btn-primary" style={{ fontSize: 14, padding: '10px 18px' }}>
            <IconApple /> Download
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={s.heroSection}>
          <div className="section" style={s.heroInner}>
            {/* Left: copy */}
            <div style={s.heroCopy}>
              <div style={s.eyebrow}>GymJunkiez</div>
              <h1 style={s.headline}>Stay Consistent.<br />See Progress.</h1>
              <p style={s.subline}>
                A strength tracker built for real training.
                Log workouts, build templates, measure progress, and reach
                your goals — with optional AI coaching.
              </p>
              <div style={s.ctaRow}>
                <a href={APP_STORE_URL} className="btn-app-store">
                  <IconApple />
                  <span className="store-label">
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </a>
              </div>
            </div>

            {/* Right: screenshot */}
            <div style={s.heroScreenWrap}>
              <img
                src="/screen-portrait.png"
                alt="GymJunkiez app screenshot"
                width={260}
                height={512}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 24 }}
              />
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────── */}
        <section style={s.section}>
          <div className="section">
            <p style={s.sectionLabel}>Features</p>
            <h2 style={s.sectionTitle}>Everything you need to train smarter</h2>
            <div className="features-grid" style={{ marginTop: 28 }}>
              {FEATURES.map(f => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <p className="feature-title">{f.title}</p>
                  <p className="feature-body">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Free ──────────────────────────────────────────────────── */}
        <section style={{ ...s.section, background: 'var(--bg-deep)' }}>
          <div className="section">
            <div style={s.premiumGrid}>
              <div style={s.premiumCopy}>
                <p style={s.sectionLabel}>Completely free</p>
                <h2 style={s.sectionTitle}>Every feature, included free</h2>
                <p style={s.bodyText}>
                  GymJunkiez is completely free. The features below are
                  included free for everyone.
                </p>
                <ul style={s.premiumList}>
                  {[
                    'AI workout plan generation',
                    'Unlimited custom templates',
                    'Strength goal tracking',
                    'Advanced progress analytics',
                    'iCloud data sync',
                  ].map(item => (
                    <li key={item} style={s.premiumItem}>
                      <span style={s.checkDot}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={s.premiumBadge}>
                <div style={s.badgeInner}>
                  <IconStar />
                  <p style={s.badgeTitle}>Free</p>
                  <p style={s.badgeBody}>Download GymJunkiez and start training at no cost.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Referral ──────────────────────────────────────────────── */}
        <section style={s.section}>
          <div className="section">
            <div style={s.refGrid}>
              <div>
                <p style={s.sectionLabel}>Referrals</p>
                <h2 style={{ ...s.sectionTitle, marginBottom: 16 }}>Share your referral link</h2>
                <p style={s.bodyText}>
                  Every GymJunkiez creator has a unique referral link. Share it
                  and your audience can join with your code applied automatically.
                </p>
                <p style={{ ...s.bodyText, marginTop: 12 }}>
                  Referral links look like:
                </p>
                <div style={s.urlExample}>
                  <span className="code-pill">https://gymjunkiez.app/ref/</span>
                  <span className="code-pill" style={{ color: 'var(--accent)' }}>YOURCODE</span>
                </div>
                <p style={{ ...s.bodyText, marginTop: 16, fontSize: 14, color: 'var(--text-muted)' }}>
                  If the app is installed, iOS opens it directly. If not,
                  the page shows the referral code and an App Store link — no
                  deferred deep linking is required.
                </p>
              </div>
              {/* visual placeholder */}
              <div style={s.refVisual}>
                <p style={s.refVisualLabel}>Your referral code</p>
                <p style={s.refVisualCode}>YOURCODE</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>Example only</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer style={s.footer}>
        <div className="section" style={s.footerInner}>
          <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            © {new Date().getFullYear()} GymJunkiez. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href={APP_STORE_URL} style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              App Store
            </a>
            <a href="/privacy-policy" style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Inline styles (layout-specific, not reused elsewhere) ─────────────── */
const s = {
  /* nav */
  nav: {
    borderBottom: '1px solid var(--border)',
    background: 'rgba(14,17,22,0.85)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingBottom: 14,
  },
  brand: {
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  brandIcon: {
    borderRadius: 8,
    display: 'block',
  },
  /* hero */
  heroSection: {
    paddingTop: 72,
    paddingBottom: 80,
  },
  heroInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'nowrap',
  },
  heroCopy: {
    flex: '1 1 300px',
    minWidth: 300,
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    textTransform: 'none',
    color: 'var(--accent)',
    background: 'none',
    border: 'none',
    borderRadius: 0,
    padding: 0,
    marginBottom: 12,
  },
  headline: {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    color: 'var(--text)',
    marginBottom: 20,
  },
  subline: {
    fontSize: 17,
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    maxWidth: 440,
    marginBottom: 32,
  },
  ctaRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  heroScreenWrap: {
    flex: '0 0 260px',
    width: 260,
  },
  heroFrame: {
    width: 'min(260px, 100%)',
  },
  /* sections */
  section: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 3vw, 34px)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    lineHeight: 1.2,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    maxWidth: 520,
  },
  /* premium */
  premiumGrid: {
    display: 'flex',
    gap: 48,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  premiumCopy: {
    flex: '1 1 320px',
  },
  premiumList: {
    listStyle: 'none',
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  premiumItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 15,
    color: 'var(--text-secondary)',
  },
  checkDot: {
    color: 'var(--success)',
    fontWeight: 700,
    fontSize: 14,
    flexShrink: 0,
  },
  premiumBadge: {
    flex: '0 0 auto',
  },
  badgeInner: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '28px 32px',
    textAlign: 'center',
    width: 220,
    color: 'var(--accent)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  badgeTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--text)',
  },
  badgeBody: {
    fontSize: 13,
    color: 'var(--text-muted)',
    lineHeight: 1.5,
  },
  /* referral */
  refGrid: {
    display: 'flex',
    gap: 48,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  urlExample: {
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
    marginTop: 10,
  },
  refVisual: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 14,
    padding: '28px 36px',
    textAlign: 'center',
    flexShrink: 0,
    minWidth: 200,
  },
  refVisualLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 8,
  },
  refVisualCode: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: 'var(--accent)',
  },
  /* footer */
  footer: {
    borderTop: '1px solid var(--border)',
    paddingTop: 24,
    paddingBottom: 24,
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
};
