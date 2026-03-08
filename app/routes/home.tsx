import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering Consulting" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React, {useState, useEffect} from 'react'
import HeroSection from "~/routes/hero-section/HeroSection";
import HeroSection2 from "~/routes/hero-section-2/HeroSection2";
import ClientFeedback from "~/routes/client-feedback/ClientFeedback";
import CircularIndeterminate from "~/components/CircularIndeterminate";


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // قائمة كل الصور والفيديوهات في الصفحة
        const media = [
            "/assets/images/build-1.webp",
            "/assets/images/buld-2.webp",
            "/assets/images/consult.webp",
            "/assets/images/people7.jpg",
            "/assets/images/woman.jpg",
            "/assets/images/people-3.jpg",
            "/assets/video/video-build.mp4",
            // لو عندك صور في HeroSection2 أو ClientFeedback ضيفهم هنا
        ];

        let loadedCount = 0;

        media.forEach((src) => {
            let element;
            if (src.endsWith(".mp4")) {
                element = document.createElement("video");
            } else {
                element = new Image();
            }

            element.src = src;
            element.onload = element.onloadeddata = () => {
                loadedCount++;
                if (loadedCount === media.length) {
                    setLoading(false);
                }
            };
        });
    }, []);

    if (loading) {
        return (
            <div style={{position:"fixed",top: "0", left: "0", width: "100%", height: "100%",display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.42)", zIndex: "999"}}>
                <CircularIndeterminate />
            </div>
        );
    }

    return (
      <div>
          <HeroSection />
          <HeroSection2 />
          <ClientFeedback />
      </div>
  )
}
export default Home

