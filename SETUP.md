# NorthForce Advisory — Setup Guide

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables.

### Required for email (contact & booking forms)

| Variable | Value | Notes |
|----------|-------|-------|
| `RESEND_API_KEY` | `re_...` | Get from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | `kontakt@northforceadvisory.se` | Where form submissions are sent |

### Optional: Custom sender address

| Variable | Value | Notes |
|----------|-------|-------|
| `RESEND_FROM_EMAIL` | `NorthForce Advisory <noreply@northforceadvisory.se>` | Requires verified domain in Resend. Falls back to `onboarding@resend.dev` |

### Sanity CMS (blog & case studies)

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your project ID | Get from [sanity.io/manage](https://www.sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Default dataset name |
| `SANITY_API_TOKEN` | `sk...` | Create at Sanity → API → Tokens (read access) |

### Unsplash (dynamic images)

| Variable | Value | Notes |
|----------|-------|-------|
| `UNSPLASH_ACCESS_KEY` | Your access key | Get from [unsplash.com/developers](https://unsplash.com/developers) |

### Other

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://northforceadvisory.se` | Used for SEO/meta tags |
| `REVALIDATION_SECRET` | Random string | Used to trigger cache revalidation via `/api/revalidate` |

## Resend Setup (5 minutes)

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys → Create API Key
3. Copy the key and set `RESEND_API_KEY` in Vercel
4. Set `CONTACT_EMAIL` to the email that should receive form submissions
5. (Optional) Add your domain in Resend → Domains to send from a custom address

## Sanity CMS Setup

1. Go to [sanity.io](https://www.sanity.io) and create a project
2. Note your Project ID from the dashboard
3. Create a read token: API → Tokens → Add API Token (Viewer)
4. Set the three `SANITY_*` variables in Vercel
5. Access the studio at `/studio` on your deployed site

## i18n (Language Switching)

The site supports Swedish (sv), English (en) and Norwegian (no). Language is switched via a cookie — no URL prefix changes. The language switcher is in the header navigation.
