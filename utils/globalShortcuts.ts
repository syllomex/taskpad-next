import { useEffect } from "react";
import { usePage } from "../store/page";

type Listener = (this: Window, ev: globalThis.KeyboardEvent) => void;

function addGlobalListener(listener: Listener) {
  window.addEventListener("keyup", listener);
}

function removeGlobalListener(listener: Listener) {
  window.removeEventListener("keyup", listener);
}

function altN(e: globalThis.KeyboardEvent) {
  return e.altKey && e.key.toLowerCase() === "n";
}

export const GlobalShortcuts = () => {
  const { create } = usePage();

  useEffect(() => {
    const listener = (e: globalThis.KeyboardEvent) => {
      if (altN(e)) create();
    };

    addGlobalListener(listener);
    return () => removeGlobalListener(listener);
  }, [create]);
};
