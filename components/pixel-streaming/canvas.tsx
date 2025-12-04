"use client";

import {
  type AllSettings,
  Config,
  Logger,
  LogLevel,
  PixelStreaming,
} from "@epicgames-ps/lib-pixelstreamingfrontend-ue5.7";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePixelStreamingStore } from "./store";

export interface PixelStreamingCanvasProps {
  initialSettings?: Partial<AllSettings>;
}

export const PixelStreamingCanvas = ({
  initialSettings,
}: PixelStreamingCanvasProps) => {
  // A reference to parent div element that the Pixel Streaming library attaches into:
  const videoParent = useRef<HTMLDivElement>(null);

  // Pixel streaming instance is shared via context:
  const pixelStreamingRef = useRef<PixelStreaming | null>(null);

  // A boolean state variable that determines if the Click to play overlay is shown:
  const [clickToPlayVisible, setClickToPlayVisible] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Run on component mount
  useEffect(() => {
    if (videoParent.current) {
      Logger.InitLogging(LogLevel.Disabled, true);

      // Attach Pixel Streaming library to videoParent element:
      const config = new Config({ initialSettings });
      const streaming = new PixelStreaming(config, {
        videoElementParent: videoParent.current,
      });

      const videoElement = document.getElementById("streamingVideo");
      if (videoElement) {
        videoElement.style.width = "100%";
        videoElement.style.height = "100%";
        videoElement.style.setProperty("object-fit", "cover");
      }

      // register a playStreamRejected handler to show Click to play overlay if needed:
      streaming.addEventListener("playStreamRejected", () => {
        setClickToPlayVisible(true);
        console.log("playStreamRejected");
      });

      // Save the library instance into component state so that it can be accessed later:
      pixelStreamingRef.current = streaming;

      usePixelStreamingStore.setState({ instance: streaming });

      // Clean up on component unmount:
      return () => {
        try {
          streaming.disconnect();
        } catch {}
      };
    }
  }, []);

  return (
    <div className="relative size-full">
      <div className="size-full" ref={videoParent} />
      {clickToPlayVisible && (
        <button
          type="button"
          className="absolute inset-0 flex size-full cursor-pointer items-center justify-center"
          onClick={() => {
            pixelStreamingRef.current?.play();
            setClickToPlayVisible(false);
          }}
        >
          <div className="mr-4 flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground">
            <Play className="size-6" />
          </div>
          <span>Click to play</span>
        </button>
      )}
    </div>
  );
};
