import { useEffect, useRef } from 'react';

export const useAutoScroll = (dependencies = []) => {
   const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return elementRef;
};
