# Responsive Fixes Plan

**Identified Issues from analysis:**
1. **Navbar Mobile Toggle**: Custom `.hamburger` with 3 `.bar` spans overrides Bootstrap default icon. Bootstrap collapse works but custom CSS hides `.navbar-collapse` on mobile.
2. **Curriculum Tabs on Mobile**: First `.tab-content.active` shows expanded; need collapsed state on mobile (<768px).
3. **Breakpoints**: Existing media queries good, but need navbar/accordion specific rules.
4. **JS Toggle**: No JS needed for nav (Bootstrap); add for mobile tabs.

**Fix Steps:**
1. **Navbar**: Replace custom spans with empty `.navbar-toggler`; add CSS for Bootstrap toggler styling.
2. **Curriculum**: CSS `.tab-content { height: 0; overflow: hidden; transition; }` + `.active { height: auto; }`; JS toggle on mobile.
3. **Apply to all HTML navs** + curriculum.html tabs.
4. **Test**: Browser dev tools + phone test.

**Files to Edit:**
- styles.css (navbar toggler, mobile tab styles)
- All *.html (navbar button HTML)
- curriculum.html (tab JS enhancement)
- script.js (mobile tab toggle)

Confirm plan before edits?
