import { KeyboardEvent } from "react";

export function onEnter(e: KeyboardEvent, action: () => void) {
  if (e.key === "Enter" && !e.ctrlKey && !e.shiftKey) {
    e.preventDefault();
    action();
  }
}
