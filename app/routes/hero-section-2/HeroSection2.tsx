import './hero-section2.scss';
import {Highlighter} from "~/components/ui/highlighter";
import imgWhoWeAre from "/assets/images/who-we-are.jpg";
import arrow from "/assets/icons/right-arrow.svg";
import meat from "/assets/images/meat.jpg";
import {useTranslation} from "react-i18next";
import {ShinyButton} from "~/components/ui/shiny-button";
import {motion} from "framer-motion";
import {NumberTicker} from "~/components/ui/number-ticker";

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

const HeroSection2 = () => {
    const { t } = useTranslation();
    const titles = [
        t("services-1"),
        t("services-2"),
        t("services-3"),
        t("services-4"),
        t("services-5"),
        t("services-6"),
        t("services-7"),
    ];

    return (
        <div className="hero-section-2">
            <div className="p-hightlighter">
                <p>
                    "{t("p-1")}{" "}
                    <Highlighter action="underline" color="#FF9800">
                        {t("p-2")}
                    </Highlighter>{" "}
                    {t("p-3")}{" "}
                    <Highlighter action="highlight" color="#87CEFA">
                        {t("p-4")}
                    </Highlighter>{""}
                    "
                </p>
            </div>
            <div className="title-marquee">
                <ul>
                    {titles.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ul>
            </div>

           {/*Who Are You & What we do*/}
            <motion.div
                className="who-we-do"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >

                <div className="content">
                <div className="info">
                    <div className="text">
                        <h1>{t("who-we-h1")}</h1>
                    </div>
                    <div className="who">
                        <h2>{t("who-we-h2")}</h2>
                        <p>{t("who-p")}</p>
                    </div>
                    <div className="who">
                        <h2>{t("what-we-h2")}</h2>
                        <p>{t("what-p")}</p>
                    </div>
                    <button className="button">
                        <a href="#" >
                            {t("who-button")}
                        </a>
                        <div className="arrow">
                          <img src={arrow} alt="arrow" />
                        </div>
                    </button>
                </div>

                <div className="image">
                    <img src={imgWhoWeAre} alt="Who We Are"/>
                    <div className="mini-box">
                        <span>10K+</span> {t("mini-box")}
                    </div>
                </div>
                </div>
            </motion.div>

            <motion.div
                className="team-section"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="top-button">{t("button-team")}</div>

                <div className="team-content">
                    <div className="left">
                        <h2>{t("tittle-team")}</h2>
                        <p>{t("p-1-team")}</p>

                        <div className="stats">
                            <div className="btn-team"><strong className="strong"><NumberTicker className="strong" value={30} />+ </strong><span>{t("counter")}</span></div>
                            <div className="btn-team"><strong className="strong"><NumberTicker className="strong" value={500} />+</strong><span>{t("counter-2")}</span></div>
                        </div>

                        <div className="button-team">
                            <ShinyButton className="btnx-1">{t("btn-1-team")}</ShinyButton>
                            <button className="btnx-2">{t("btn-2-team")}</button>
                        </div>
                    </div>

                    <div className="right">
                        <h2>{t("tittle-2-team")}</h2>
                        <p>{t("pra-team")}</p>
                    </div>

                    <div className="team-imge">
                        <img src={meat} alt="Meat" />
                    </div>
                </div>
            </motion.div>

        </div>
    )
}
export default HeroSection2
