import { create } from "zustand";

interface MessageState {
  shouldGoDown: boolean;
  setGoDown(bool: boolean): void;
  reset(): void;
}

export const useMessageStore = create<MessageState>((set) => ({
  shouldGoDown: false,
  setGoDown(bool) {
    set({ shouldGoDown: bool });
  },
  reset() {
    set({
      shouldGoDown: false,
    });
  },
}));
