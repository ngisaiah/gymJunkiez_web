# GymJunkiez Web

Minimal Next.js 14 Vercel project serving:
- Landing page at `/`
- Referral fallback pages at `/ref/:code`
- Apple App Site Association at `/.well-known/apple-app-site-association`

## Deploy to Vercel

```bash
npm install
vercel --prod
```

Set the custom domain to `gymjunkiez.app` in the Vercel project settings.

## DNS Setup (gymjunkiez.app)

In your DNS provider, add:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

Vercel will automatically provision an SSL certificate.

## Key URLs

| URL | Purpose |
|-----|---------|
| `https://gymjunkiez.app/` | Landing page with App Store link |
| `https://gymjunkiez.app/ref/CODE` | Referral fallback page |
| `https://gymjunkiez.app/.well-known/apple-app-site-association` | AASA — read by iOS to validate Universal Links |
| `https://apps.apple.com/us/app/gymjunkiez/id6758291402` | App Store listing |

## Example Referral Link

```
https://gymjunkiez.app/ref/ISAIAH2024
```

- Code is normalized to uppercase
- Valid pattern: `[A-Z0-9_-]{3,32}`
- Invalid codes show a simple error page

## Universal Link Testing (after iOS build)

1. Install the app via TestFlight or simulator build with `associatedDomains` entitlement
2. Open Safari on the device and navigate to `https://gymjunkiez.app/ref/TESTCODE`
3. iOS should present a banner or auto-open the app
4. If not, check Settings → Developer → Universal Links → Diagnostics

Test the AASA is reachable:
```bash
curl -I https://gymjunkiez.app/.well-known/apple-app-site-association
# Expect: Content-Type: application/json
```

## Notes

- **No deferred deep linking** — if the app is not installed, the page shows the App Store link only. The referral code must be entered manually during signup.
- The Smart App Banner (`apple-itunes-app` meta tag) provides a native iOS prompt to open the installed app directly from Safari.
- The AASA is served by a Next.js Route Handler with `Content-Type: application/json` and no `.json` extension in the URL.
