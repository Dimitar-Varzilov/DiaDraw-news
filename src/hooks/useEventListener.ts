import { useEffect, useRef } from "react";

interface useEventListenerOptions {
  deps?: any[];
}

export default function useEventListener(
  eventType: string | keyof DocumentEventMap,
  callback: (ev: Event) => void,
  element: Document | Window | HTMLElement = document,
  options: useEventListenerOptions = {}
) {
  const { deps = [] } = options;
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = callbackRef.current;
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element, ...deps]);
}
