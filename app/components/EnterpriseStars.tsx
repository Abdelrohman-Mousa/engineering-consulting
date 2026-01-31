import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

type StarData = {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
};

const generateStars = (count: number): StarData[] =>
    Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 6 + 4,
    }));

const stars = generateStars(35);

const EnterpriseStars: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
    const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                x: parallaxX,
                y: parallaxY,
            }}
        >
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    style={{
                        position: "absolute",
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.62)",
                        boxShadow: "0 0 12px #FFD700, 0 0 24px #FFC107",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </motion.div>
    );
};

export default EnterpriseStars;
