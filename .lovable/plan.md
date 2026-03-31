

# Add Resume PDF with Dedicated Resume Page

## Steps

1. **Copy PDF to public folder**: `user-uploads://cahal-consulting-resume-march_1.pdf` → `public/resume.pdf`

2. **Create `src/pages/Resume.tsx`**: A lightweight page matching the dark site theme with:
   - A centered card showing "Michael Cahal — Resume"
   - A download link/button pointing to `/resume.pdf`
   - A "← Back to Portfolio" link to `/`
   - Uses the same dark background, accent color, and typography as the main site

3. **Add route in `src/App.tsx`**: Add `<Route path="/resume" element={<Resume />} />` above the catch-all

4. **Update Resume CTA links**: Change `profile.resumeUrl` in `src/data/profile.ts` from `"#"` to `"/resume"`. Update the Resume `<a>` tags in `Hero.tsx` and `Contact.tsx` to use `<Link>` from react-router (internal navigation) instead of `target="_blank"` for the Resume button specifically.

