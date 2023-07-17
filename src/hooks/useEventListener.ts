import { useEffect, useRef } from "react";

interface IOptions {
  element?: Document | Window | HTMLElement;
  deps?: any[];
}

export default function useEventListener(
  eventType: string | keyof DocumentEventMap,
  callback: (ev: Event) => void,
  options: IOptions = {}
) {
  const { deps = [], element = document } = options;
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element, deps]);
}
