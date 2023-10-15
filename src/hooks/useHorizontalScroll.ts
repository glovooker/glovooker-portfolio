import { RefObject, useEffect, useRef } from 'react';

export function useHorizontalScroll (
  refTarget: RefObject<HTMLElement> = { current: document.body }
): RefObject<HTMLDivElement> {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const target = refTarget.current;

    if (!element || !target) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      const delta = Math.max(-1, Math.min(1, e.deltaY));
      element.scrollTo({
        left: element.scrollLeft + delta * 200,
        behavior: 'smooth',
      });
    };

    target.addEventListener('wheel', onWheel);

    return () => target.removeEventListener('wheel', onWheel);
  }, [refTarget]);

  return elementRef;
}
