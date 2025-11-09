import './heroSection.scss';
import build from "/assets/images/build-1.webp";
import building from "/assets/images/buld-2.webp";
import consult from "/assets/images/consult.webp";
import people1 from "/assets/images/people7.jpg";
import people2 from "/assets/images/woman.jpg";
import people3 from "/assets/images/people-3.jpg";
import arrow from "/assets/icons/right-arrow.svg";
import video from "/assets/video/video-build.mp4";
import HalfRating from "../../../src/material-ui/HalfRating";
import {ShinyButton} from "~/components/ui/shiny-button";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const textVariants = {
    initial: {
        x: 0,
        y: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const listVariants = {
    initial: {
        x: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            ease: "easeOut",
        },
    },
};


const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <div className="hero-section_content">
                <div className="title">
                    <h1>{t("title-1-HeroSection")}</h1>
                </div>

                <motion.div className="images-small"
                     variants={listVariants}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true, amount: 0.3 }}
                >
                    <img src={build} alt="build-1"/>
                    <img src={building} alt="build-1"/>
                    <img src={consult} alt="build-1"/>

                    <div className="clients">
                        <div className="img-peoble">
                            <img src={people1} alt="peoble"/>
                            <img src={people2} alt="peoble"/>
                            <img src={people3} alt="peoble"/>
                            <div className="star">
                               <HalfRating />
                            </div>
                        </div>
                        <div className="text">
                            <h4>{t("client")}</h4>
                        </div>
                    </div>
                </motion.div>
                <div className="button-hero-section">
                    <ShinyButton >
                        <div className="button-icon">
                        <h4>{t("button-hero-section")}</h4>
                            <div className="img-wrapper">
                             <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </ShinyButton>

                    <h3 className="desc">{t("title-2-HeroSection")}</h3>
                </div>
            </div>

            <motion.div
                className="hero-section_image"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >

                <video autoPlay loop muted playsInline className="video-hero-section">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="description">
                    <h3>{t("title-3-HeroSection")}</h3>
                    <hr style={{height: "2px", backgroundColor: "rgba(7,7,7,0.11)", margin: "5px 0"}}/>
                    <h4 className="happy-client">
                        <div>
                        <span>10K</span> {t("HappyClients")}
                        </div>
                        <p>{t("p-heroSection")}</p>
                    </h4>
                </div>
            </motion.div>
        </div>
    )
}
export default HeroSection
