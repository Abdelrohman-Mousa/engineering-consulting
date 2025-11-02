import './heroSection.scss';
import build from "public/assets/images/build-1.jpg";
import building from "public/assets/images/buld-2.jpg";
import consult from "public/assets/images/consult.jpg";
import people1 from "public/assets/images/people1.jpg";
import people2 from "public/assets/images/people2.jpg";
import people3 from "public/assets/images/people3.jpg";
import arrow from "public/assets/icons/right-arrow.svg";
import video from "public/assets/video/video-build.mp4";
import HalfRating from "../../../src/material-ui/HalfRating";
import {ShinyButton} from "~/components/ui/shiny-button";
import {motion} from "framer-motion";

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

    return (
        <div className="hero-section">
            <div className="hero-section_content">
                <div className="title">
                    <h1>We build your ideas with an integrated engineering vision</h1>
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
                            <h4>50+ Positive Reviews we Achived</h4>
                        </div>
                    </div>
                </motion.div>
                <div className="button-hero-section">
                    <ShinyButton >
                        <div className="button-icon">
                        <h4>Request Consultation</h4>
                            <div className="img-wrapper">
                             <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </ShinyButton>

                    <h3 className="desc">Don’t postpone your project — consult now and get an initial assessment with actionable steps within 48 hours.</h3>
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
                    <h3>
                        Innovative engineering consultancy delivering architectural, structural, electrical, and mechanical solutions — from design to supervision and project management.
                    </h3>
                    <hr style={{height: "2px", backgroundColor: "rgba(7,7,7,0.11)", margin: "5px 0"}}/>
                    <h4 className="happy-client">
                        <div>
                        <span>10K</span> Happy Clients
                        </div>
                        <p>Completing there dream with us</p>
                    </h4>
                </div>

            </motion.div>
        </div>
    )
}
export default HeroSection
