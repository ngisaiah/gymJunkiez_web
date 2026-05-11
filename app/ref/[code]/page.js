const APP_STORE_URL = 'https://apps.apple.com/us/app/gymjunkiez/id6758291402';
const CODE_REGEX    = /^[A-Z0-9_-]{3,32}$/;

/* ── Metadata — Smart App Banner is set here ───────────────────────────── */

export async function generateMetadata({ params }) {
  const code = params.code?.trim().toUpperCase() ?? '';
  if (!CODE_REGEX.test(code)) {
    return { title: 'Invalid Referral — GymJunkiez' };
  }
  const appArgument = `https://gymjunkiez.app/ref/${code}`;
  return {
    title: `Join GymJunkiez · ${code}`,
    description: `You've been invited to GymJunkiez. Use referral code ${code} when you sign up.`,
    other: {
      'apple-itunes-app': `app-id=6758291402, app-argument=${appArgument}`,
    },
  };
}

/* ── Apple icon ────────────────────────────────────────────────────────── */

function IconApple() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function RefPage({ params }) {
  const rawCode = params.code ?? '';
  const code    = rawCode.trim().toUpperCase();
  const isValid = CODE_REGEX.test(code);

  /* ── Invalid code ─────────────────────────────────────────────────── */
  if (!isValid) {
    return (
      <main style={s.page}>
        <nav style={s.nav}>
          <span style={s.brand}><img src="/icon.png" alt="" width={28} height={28} style={{ borderRadius: 8, display: 'block' }} />GymJunkiez</span>
        </nav>
        <div style={s.centeredCard}>
          <div style={s.invalidIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#EF4444' }}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h1 style={s.title}>Invalid referral link</h1>
          <p style={s.body}>
            This referral link is not valid. Ask your referrer for a new link.
          </p>
          <a href={APP_STORE_URL} className="btn-app-store" style={{ display: 'inline-flex' }}>
            <IconApple />
            <span className="store-label">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>
        </div>
      </main>
    );
  }

  /* ── Valid code ───────────────────────────────────────────────────── */
  return (
    <main style={s.page}>
      {/* Nav */}
      <nav style={s.nav}>
        <a href="/" style={s.brand}><img src="/icon.png" alt="" width={28} height={28} style={{ borderRadius: 8, display: 'block' }} />GymJunkiez</a>
      </nav>

      <div style={s.layout}>
        {/* Left: code + CTA */}
        <div style={s.left}>
          <p style={s.eyebrow}>You've been invited</p>
          <h1 style={s.headline}>Join <img src="/icon.png" alt="" width={28} height={28} style={{ borderRadius: 8, display: 'block' }} />GymJunkiez</h1>
          <p style={s.body}>
            You have a referral code. If the app does not open automatically,
            download <img src="/icon.png" alt="" width={28} height={28} style={{ borderRadius: 8, display: 'block' }} />GymJunkiez and enter this code during signup.
          </p>

          {/* Code box */}
          <div className="ref-code-box" style={{ marginTop: 28, marginBottom: 28 }}>
            <p className="ref-code-label">Your referral code</p>
            <p className="ref-code-value">{code}</p>
          </div>

          <a href={APP_STORE_URL} className="btn-app-store" style={{ display: 'inline-flex' }}>
            <IconApple />
            <span className="store-label">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>

          <p style={s.hint}>
            On an iPhone with the app installed, this page opens the app
            automatically via Universal Links.
          </p>
        </div>

        {/* Right: screenshot */}
        <div style={s.right}>
          <div className="screenshot-frame" style={s.refFrame}>
            <img
              src="/screen-portrait.png"
              alt="GymJunkiez app screenshot"
              width={200}
              height={393}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ── Styles ────────────────────────────────────────────────────────────── */
const s = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg)',
  },
  nav: {
    borderBottom: '1px solid var(--border)',
    padding: '16px 28px',
    display: 'flex',
    alignItems: 'center',
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
  centeredCard: {
    maxWidth: 400,
    margin: '80px auto',
    padding: '0 24px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  invalidIcon: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'rgba(239,68,68,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  layout: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '64px 28px',
    display: 'flex',
    gap: 60,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 300px',
    minWidth: 260,
  },
  right: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  refFrame: {
    width: 'min(200px, 100%)',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 12,
  },
  headline: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    lineHeight: 1.15,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: 'var(--text)',
  },
  body: {
    fontSize: 16,
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    maxWidth: 420,
  },
  hint: {
    marginTop: 20,
    fontSize: 13,
    color: 'var(--text-muted)',
    lineHeight: 1.55,
    maxWidth: 380,
  },
};
