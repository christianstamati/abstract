import type { PixelStreaming } from "@epicgames-ps/lib-pixelstreamingfrontend-ue5.7";
import { create } from "zustand";

interface PixelStreamingStore {
  instance: PixelStreaming | null;
}

export const usePixelStreamingStore = create<PixelStreamingStore>(() => ({
  instance: null,
}));
