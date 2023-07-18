import { RefObject } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: (ev: Event) => void,
  deps: any[] = []
) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      callback(e);
    },
    document,
    { deps }
  );
}
