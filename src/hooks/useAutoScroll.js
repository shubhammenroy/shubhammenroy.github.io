import { useEffect, useRef } from 'react';

export const useAutoScroll = (dependencies = []) => {
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return inputRef;
};
