import React, { useEffect, useRef } from "react";
import Down from "@/public/Assets/downarrow.svg";
import Image from "next/image";
const VideoBackground = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        // muted
        playsInline
      >
        <source src="/Assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className=" space-y-12">
          <div>
            <button className="w-full flex justify-center">
              <Image
                className="animate-bounce hover:animate-pulse max-md:w-10 invert"
                alt=""
                src={Down}
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
