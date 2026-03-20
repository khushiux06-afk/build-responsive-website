import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function NavigationEnhancer() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Find the closest navigation item
      const navItem = target.closest('[data-name="Component 11"]') || target.closest('[data-name="Link → Orah Dental"]');

      if (navItem) {
        const text = navItem.textContent?.trim().toLowerCase();

        e.preventDefault();
        e.stopPropagation();

        switch (text) {
          case 'home':
            navigate('/');
            break;
          case 'about':
            navigate('/about');
            break;
          case 'services':
            navigate('/services');
            break;
          case 'our team':
            navigate('/team');
            break;
          case 'contact':
            navigate('/contact');
            break;
          case 'faq':
          case 'faqs':
            navigate('/faq');
            break;
          default:
            // Logo click goes to home
            if (navItem.getAttribute('data-name') === 'Link → Orah Dental') {
              navigate('/');
            }
        }
      }

      // Handle "Book Appointment" button
      const bookButton = target.closest('[data-name="Component 6"]');
      if (bookButton && bookButton.textContent?.includes('Book Appointment')) {
        e.preventDefault();
        e.stopPropagation();
        navigate('/appointment');
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [navigate]);

  return null;
}
