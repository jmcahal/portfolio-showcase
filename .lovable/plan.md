

# Add Avatar to Hero

## What
Copy the uploaded SVG to `src/assets/` and display it in the Hero section alongside the existing text content.

## Layout
Split the hero into a two-column layout on desktop: left column keeps the existing text content (tagline, name, headline, CTAs), right column shows the avatar SVG at a large size (~200–280px). On mobile, the avatar appears above the text content.

## Steps

1. **Copy asset**: `user-uploads://cahal3.svg` → `src/assets/cahal3.svg`
2. **Update `Hero.tsx`**:
   - Import the SVG from `@/assets/cahal3.svg`
   - Wrap content in a flex/grid container: text left, avatar right (stacked on mobile)
   - Render the avatar as an `<img>` with rounded-full styling and a subtle border using the accent color

