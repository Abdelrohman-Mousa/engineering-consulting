import './client-feedback.scss';
import client1 from "/assets/images/woman.jpg";
import client2 from "/assets/images/people7.jpg";
import HalfRating from "../../../src/material-ui/HalfRating";
import {useTranslation} from "react-i18next";
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

const ClientFeedback = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="client-feedback">
                <div className="title-feedback">
                    <h2>{t("tittle-client")}</h2>
                    <p>{t("p-client")}</p>
                </div>

                <motion.div
                    className="feedback-cards"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="feedback-card">
                        <p>"{t("p-card-1")}"</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client1} alt="client-1" />
                            <div>
                                <h4>{t("name-client-1")}</h4>
                                <span>{t("job-client-1")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-card">
                        <p>"{t("p-card-2")}"</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client2} alt="client-2" />
                            <div>
                                <h4>{t("name-client-2")}</h4>
                                <span>{t("job-client-2")}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default ClientFeedback
