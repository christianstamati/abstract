import { PixelStreamingCanvas } from "@/components/pixel-streaming/canvas";

export default function Main() {
  return (
    <div className="size-full">
      <PixelStreamingCanvas
        initialSettings={{
          AutoPlayVideo: true,
          AutoConnect: true,
          ss: "http://192.168.1.7:80",
          StartVideoMuted: true,
          HoveringMouse: true,
          WaitForStreamer: true,
          MatchViewportRes: true,
          TimeoutIfIdle: false,
          TouchInput: true,
          WebRTCFPS: 30,
          PreferredCodec: "H264",
        }}
      />
    </div>
  );
}
