import './consultationRequest.scss';
import ConsultingType from "../../../src/material-ui/ConsultingType";
import Priority from "../../../src/material-ui/Priority";
import FormInput from "../../../src/material-ui/FormInput";
import TextareaField from "../../../src/material-ui/TextareaField";
import {useState} from "react";
import {Dropzone} from "~/components/dropzone/Dropzone";
import CountrySelect from "../../../src/countrySelect/CountrySelect";
import sent from "/assets/icons/sent.svg"
import { motion } from "framer-motion";
import EnterpriseStars from "~/components/EnterpriseStars";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};


const Services = () => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div className="consultation-request">
            <div className="consultation-request-title"  style={{position: "relative"}}>
                <EnterpriseStars />

                <h1>Get Expert Consultation </h1>
                <p>Tell us about your case and our experts will get back to you with the best solution.</p>
            </div>

            <motion.div
                className="consultation-request-form"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                   <div
                       className="form-container"
                       variants={containerVariants}
                   >
                        <motion.div
                            className="consulting-name-email"
                            variants={itemVariants}
                        >
                           <FormInput />
                        </motion.div>

                       <motion.div
                           className="consultation-type-priority"
                           variants={itemVariants}
                       >
                           <ConsultingType />

                           <Priority/>
                       </motion.div>

                       <motion.div
                           className="consultation-description"
                           variants={itemVariants}
                       >
                          <TextareaField />
                       </motion.div>

                       <motion.div
                           className="attachments"
                           variants={itemVariants}
                       >
                           <div className="file-dropzone flex flex-col gap-1">
                               <p className="text-gray-500 text-base">Optional attachment (image or PDF) for better review.</p>
                              <Dropzone />
                           </div>

                           <CountrySelect />
                       </motion.div>
                       <motion.button
                           type="button"
                           className="btn-request-consulting"
                           variants={itemVariants}
                           whileHover={{ scale: 1.0 }}
                           whileTap={{ scale: 0.95 }}
                       >
                           <img src={sent} alt="sent" />
                           <p>Request Consultation</p>
                       </motion.button>
                   </div>
            </motion.div>
        </div>
    )
}
export default Services
