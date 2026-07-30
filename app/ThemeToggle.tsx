'use client';

const THEME_STORAGE_KEY = 'liquid-cafe-theme';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const explicitTheme = root.dataset.theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'latte' : 'espresso';
    const currentTheme = explicitTheme === 'latte' || explicitTheme === 'espresso' ? explicitTheme : systemTheme;
    const nextTheme = currentTheme === 'latte' ? 'espresso' : 'latte';

    root.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The selected roast still applies for this visit when storage is unavailable.
    }
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <svg className="theme-icon theme-icon-espresso" width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19.5 14.25A7.5 7.5 0 0 1 9.75 4.5a7.5 7.5 0 1 0 9.75 9.75Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <svg className="theme-icon theme-icon-latte" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );
}
