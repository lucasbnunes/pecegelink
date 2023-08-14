import { useState, useEffect } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

export default function useViewport() {
  const [windowSize, setWindowSize] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    changeWindowSize();
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
