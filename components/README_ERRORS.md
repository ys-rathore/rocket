Troubleshooting & common errors
==============================
This file lists possible errors you may encounter with this scaffold and how to fix them.

1) Module not found: Can't resolve '@/assets/rocket-model.splinecode'
   - Ensure the file exists at /assets/rocket-model.splinecode.
   - If you moved the file, update the import path in components/SplineViewer.tsx.
   - Ensure next.config.mjs has the rule to treat .splinecode as asset/resource (already included).

2) 403 Forbidden / Spline fetching errors
   - If you switched to iframe embeds (my.spline.design), ensure the URL is public.
   - For local .splinecode, make sure the file is properly exported and not corrupted.

3) White page / React minified error
   - Check browser console for the first error. Often caused by Spline failing to parse a scene.
   - Temporarily remove <Spline ... /> from SplineViewer to confirm app runs.

4) Loader not visible / behind canvas
   - We render loader as a portal with z-[99999]; if still behind, ensure parent elements don't create new stacking contexts with higher z-index.
   - Inspect the DOM and computed z-index in devtools.

5) Build errors on Cloudflare / Vercel
   - Ensure you use the same package manager as lockfile (pnpm vs npm).
   - Clear build cache or redeploy after changes.
   - If you see errors about 'sharp' or native modules, allow build scripts or add env variables per CI.

6) Typescript import errors (.splinecode)
   - If using TS and import causes a type error, add a declaration file: declare module '*.splinecode';
   - We've added a basic tsconfig.json; update includes if necessary.

7) Watermark still visible
   - If embedding via my.spline.design iframe, watermark is from Spline free tier; follow Spline export options or self-host a .splinecode to remove watermark.

8) Performance / large bundles
   - Large .splinecode files can bloat the client bundle. Consider serving via API route or public folder if needed.
