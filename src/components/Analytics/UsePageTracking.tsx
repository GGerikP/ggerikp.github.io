import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const gaConsent = localStorage.getItem('gaConsent');
    if (gaConsent === 'true') {
      // Track the page view only if GA consent has been given
      ReactGA.send({
        hitType: 'pageview',
        page_path: location.pathname + location.search
      });
    }
  }, [location]);  // Depend on location to re-run on route change
};

export default usePageTracking;
