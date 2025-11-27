import type { Route } from "./+types/About";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About US" },
        { name: "description", content: "About Us" },
    ];
}

import './about.scss';
import arrow from "/assets/icons/right-arrow.svg";
import {ShinyButton} from "~/components/ui/shiny-button";
import {NumberTicker} from "~/components/ui/number-ticker";
import about1 from "/assets/images/about-img.jpg";
import about2 from "/assets/images/about-img2.jpg"
import location from "/assets/icons/location2.svg"
import team1 from "/assets/images/people7.jpg";
import team2 from "/assets/images/woman.jpg";
import team3 from "/assets/images/team3.jpg";
import team4 from "/assets/images/team4.jpg";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";


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


const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div className="about-background">
               <div className="abou-info">
                   <h1>{t("about-tittle")}</h1>
                   <p>{t("about-para")}</p>
               </div>
                <ShinyButton>
                  <div className="about-button">
                     <h4>{t("about-btn")}</h4>
                      <div className="arrow">
                          <img src={arrow} alt="arrow" />
                      </div>
                  </div>
                </ShinyButton>
            </div>

            <motion.div
                className="info-cards"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="card">
                    <p><NumberTicker value={30} />+</p>
                    <h2>{t("about-card")}</h2>
                </div>

                <div className="card">
                    <p><NumberTicker value={120} />+</p>
                    <h2>{t("about-card2")}</h2>
                </div>

                <div className="card">
                    <p><NumberTicker value={35} />+</p>
                    <h2>{t("about-card3")}</h2>
                </div>

                <div className="card">
                    <p><NumberTicker value={100} />+</p>
                    <h2>{t("about-card4")}</h2>
                </div>
            </motion.div>

            <motion.div
                className="about-info"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="about-img">
                    <img src={about1} alt="about" />
                    <img className="xxx" src={about2} alt="about" />
                </div>

                <div className="about-content">
                    <h1>"{t("aboutSection")}"</h1>
                    <p>{t("aboutP1")}</p>
                    <p>{t("aboutP2")}</p>
                    <p>{t("aboutP3")}</p>
                    <div className="location">
                        <img src={location} alt="loation"/>
                        <p>{t("aboutP4")}</p>
                    </div>
                    <Link to="/contact">
                    <ShinyButton className="about-btn">{t("ContactUS")}</ShinyButton>
                    </Link>
                </div>
            </motion.div>

             <div className="about-team">
                <h1>{t("about-team-title")}</h1>
                 <p>{t("team-p")}</p>

                 <motion.div
                     className="team-container"
                     variants={textVariants}
                     initial="initial"
                     whileInView="animate"
                     viewport={{ once: true, amount: 0.3 }}
                 >
                     <div className="team-card">
                         <img src={team1} alt="peoble"/>
                         <div className="card-info">
                             <h3>{t("teem-name-people1")}</h3>
                             <p>{t("team-jop1")}</p>
                         </div>
                     </div>

                     <div className="team-card">
                         <img src={team2} alt="peoble"/>
                         <div className="card-info">
                             <h3>{t("teem-name-people2")}</h3>
                             <p>{t("team-jop2")}</p>
                         </div>
                     </div>

                     <div className="team-card">
                         <img src={team3} alt="peoble"/>
                         <div className="card-info">
                             <h3>{t("teem-name-people3")}</h3>
                             <p>{t("team-jop3")}</p>
                         </div>
                     </div>

                     <div className="team-card">
                         <img src={team4} alt="peoble"/>
                         <div className="card-info">
                             <h3>{t("teem-name-people4")}</h3>
                             <p>{t("team-jop4")}</p>
                         </div>
                     </div>
                 </motion.div>
             </div>

        </div>
    )
}
export default About
