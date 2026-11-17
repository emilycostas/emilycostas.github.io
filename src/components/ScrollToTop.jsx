import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Keep the homepage address clean while retaining hash routes for subpages.
    if (pathname === '/' && window.location.hash === '#/') {
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
