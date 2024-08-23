import { useEffect, useRef, useState } from "react";

const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleLoad = () => setLoading(false);

    if (videoElement) {
      videoElement.addEventListener("canplaythrough", handleLoad);

      // Check if video is already in a playable state
      if (videoElement.readyState >= 3) {
        handleLoad();
      }

      return () => {
        videoElement.removeEventListener("canplaythrough", handleLoad);
      };
    }
  }, []);

  return { loading, videoRef };
};

export default useVideo;
