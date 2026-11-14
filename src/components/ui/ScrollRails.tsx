import { useEffect } from 'react';

export function ScrollRails() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-pct', `${scrollPercent}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="rail-track-left">
        <div className="rail-fill-left" />
      </div>
      <div className="rail-track-right">
        <div className="rail-fill-right" />
      </div>
    </>
  );
}
