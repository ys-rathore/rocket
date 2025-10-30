Rocket — Next.js + Spline starter (self-hosted .splinecode)
=========================================================

What is included
- Next.js (app router) scaffold
- Spline integration via @splinetool/react-spline
- Universal loading screen with smooth exit animation
- next.config.mjs configured to bundle .splinecode as an asset/resource
- Troubleshooting file with common errors and fixes

Quick start
1. Install dependencies:
   pnpm install
   # or
   npm install

2. Replace the placeholder file at:
   /assets/rocket-model.splinecode
   with your exported .splinecode file from Spline.

3. Run development server:
   pnpm dev
   # or
   npm run dev

Notes & deep analysis of common failure points
- If the Spline scene fails to load, the first browser console error is the best hint.
- If you previously used iframe embeds, remove them to avoid watermark and CORS issues.
- For production deployment on Cloudflare Pages, ensure the build uses the same package manager as lockfile (pnpm), and clear build caches if stale modules remain.
- If you prefer not to bundle the .splinecode into the client bundle, serve it via an internal API route (/api/spline) and point Spline to that endpoint.

Files of interest
- app/page.tsx
- components/SplineViewer.tsx
- components/LoadingScreen.tsx
- next.config.mjs
- assets/rocket-model.splinecode (replace with your exported file)

Troubleshooting: see components/README_ERRORS.md
