import { useCallback } from 'react';
export const useScrollLock = () => {

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '6px';
    document.body.style.background = '#11123F';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.body.style.background = '';
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
