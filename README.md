# Digital CV — Next.js optimized branch

This branch is built from the Stitch HTML concept and optimized as a mobile-first Next.js + Tailwind website.

## What changed in this branch

- Mobile header now keeps the identity block: avatar/initials, name, and "Growth · Ecommerce · Performance".
- Desktop navigation is hidden on mobile and visible from desktop upward.
- Header identity can use either initials or a small avatar image.
- Hero media card is cleaner on mobile and can be hidden on mobile from the content file.
- Hero image can use a full personal photo or any relevant image.
- Brand marquee supports text fallback, uploaded logos, and optional clickable links.
- Added a highlighted case studies section.
- Each case study can open as a modal, redirect to an internal page, or link externally.
- Work experience section was visually refined to better match the full page while keeping the open/close accordion behavior.

## How to edit the content

Most edits are inside:

```txt
src/data/content.ts
```

### Header avatar

Put your avatar in:

```txt
public/avatar.jpg
```

Then update:

```ts
avatarSrc: "/avatar.jpg"
```

Leave it empty to keep the initials:

```ts
avatarSrc: ""
```

### Hero full photo / image

Put your full photo or relevant image in:

```txt
public/profile/profile-photo.jpg
```

Then update:

```ts
heroImage: "/profile/profile-photo.jpg"
```

### Hide or show the hero media card on mobile

In `siteSettings`:

```ts
showHeroMediaOnMobile: true
```

Set to `false` to hide the card on mobile while keeping it on desktop.

### Brand logos and clickable links

Put logos in:

```txt
public/logos/
```

Then update brands like this:

```ts
{
  name: "In Your Shoe",
  shortName: "IYS",
  logoSrc: "/logos/iys.svg",
  href: "https://example.com"
}
```

- `logoSrc` is optional. If empty, the text fallback appears.
- `href` is optional. If added, the brand becomes clickable.

### Case studies

Case studies are controlled from `caseStudies`.

To hide one:

```ts
isVisible: false
```

To control how it opens:

```ts
openMode: "modal"      // opens popup
openMode: "page"       // opens /case-studies/your-slug
openMode: "external"   // opens externalHref
```

For external links:

```ts
openMode: "external",
externalHref: "https://example.com"
```

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Test production build

```bash
npm run build
```

## Deploy to Vercel

Push to GitHub, then import the repo in Vercel as a Next.js project.
