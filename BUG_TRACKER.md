# Bug Tracker & Dev Rules - VERGA Project

## UI/UX & Responsiveness Rules
- **Rule 1:** Always use a mobile-first approach or ensure thorough testing on small screens (< 480px).
- **Rule 2:** Avoid fixed `width` or `height` on containers; use `max-width: 100%` and `object-fit: cover` for images.
- **Rule 3:** Navigation menu must be fully accessible and usable on mobile (check hamburger menu transitions).
- **Rule 4:** Font sizes should be fluid (using `rem` or media queries) so they don't overflow on small screens.

## Active Bugs
1. **Responsiveness Issue:** Layout breaks on Android/Mobile devices. Hero section and grids overlap or overflow. [Status: Fixing]
2. **Navigation Bug:** Mobile menu overlay/hamburger might not be firing correctly on some devices. [Status: Reviewing]
3. **Article Pages:** Articles need to inherit the same responsiveness as the main page. [Status: Pending]

## Design History
- Updated Meta tags for SEO (Mushroom, Compost, Casing Soil).
- Added Knowledge Hub (Encyclopedia) with 4 major articles.
- Updated Founder section with professional photo.
