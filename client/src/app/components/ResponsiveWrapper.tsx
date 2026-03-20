import { ReactNode, useEffect, useState } from 'react';
import { NavigationEnhancer } from './NavigationEnhancer';

interface ResponsiveWrapperProps {
  children: ReactNode;
}

export function ResponsiveWrapper({ children }: ResponsiveWrapperProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const designWidth = 1920;

      if (viewportWidth < designWidth) {
        // Calculate scale to fit the design in viewport
        const newScale = viewportWidth / designWidth;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fff9f0] overflow-x-hidden">
      <NavigationEnhancer />
      <div
        className="w-[1920px] mx-auto origin-top"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          marginBottom: scale < 1 ? `${(1 - scale) * -100}%` : 0
        }}
      >
        {children}
      </div>
    </div>
  );
}
