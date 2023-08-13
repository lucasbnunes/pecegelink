import { useState, useEffect } from 'react';

export default function useViewport() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
