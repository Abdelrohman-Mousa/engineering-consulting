import './consultationRequest.scss';
import ConsultingType from "../../../src/material-ui/ConsultingType";
import Priority from "../../../src/material-ui/Priority";
import FormInput from "../../../src/material-ui/FormInput";
import TextareaField from "../../../src/material-ui/TextareaField";
import { useState } from "react";
import { Dropzone } from "~/components/dropzone/Dropzone";
import CountrySelect from "../../../src/countrySelect/CountrySelect";
import sent from "/assets/icons/sent.svg";
import { motion } from "framer-motion";
import EnterpriseStars from "~/components/EnterpriseStars";
import { db } from "/src/config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";

type FormData = {
    name: string;
    email: string;
    consultingType: string;
    priority: string;
    description: string;
    country: string;
    attachment: File | null; // سيبنا الحقل موجود بس مش هيرفع
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        consultingType: "",
        priority: "",
        description: "",
        country: "",
        attachment: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);

    const handleChange = <K extends keyof FormData>(
        field: K,
        value: FormData[K]
    ) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: "" }));
    };

    const handleSubmit = async () => {
        // Validation
        if (!formData.name.trim()) return toast.error("Please enter your name!");
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email))
            return toast.error("Invalid email!");
        if (!formData.consultingType) return toast.error("Select consulting type!");
        if (!formData.priority) return toast.error("Select priority!");
        if (!formData.description.trim()) return toast.error("Write description!");
        if (!formData.country) return toast.error("Select country!");

        setLoading(true);

        try {
            // هنا مش هنعمل أي رفع للملف، بس هنخزن معلوماته لو موجود
            await addDoc(collection(db, "consultations"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: "done",
            });

            toast.success("Consultation Sent 🚀");

            // Reset
            setFormData({
                name: "",
                email: "",
                consultingType: "",
                priority: "",
                description: "",
                country: "",
                attachment: null,
            });

        } catch (error) {
            console.error(error);
            toast.error("Error sending request 😓");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="consultation-request">
            <div className="consultation-request-title" style={{ position: "relative" }}>
                <EnterpriseStars />
                <h1>Get Expert Consultation</h1>
                <p>Tell us about your case and our experts will get back to you with the best solution.</p>
            </div>

            <motion.div
                className="consultation-request-form"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="form-container">
                    <motion.div className="consulting-name-email" variants={itemVariants}>
                        <FormInput
                            name={formData.name}
                            email={formData.email}
                            onChange={handleChange}
                            errors={{ name: errors.name, email: errors.email }}
                        />
                    </motion.div>

                    <motion.div className="consultation-type-priority" variants={itemVariants}>
                        <ConsultingType
                            value={formData.consultingType}
                            onChange={(val) => handleChange("consultingType", val)}
                            error={errors.consultingType}
                        />
                        <Priority
                            value={formData.priority}
                            onChange={(val) => handleChange("priority", val)}
                            error={errors.priority}
                        />
                    </motion.div>

                    <motion.div className="consultation-description" variants={itemVariants}>
                        <TextareaField
                            value={formData.description}
                            onChange={(val) => handleChange("description", val)}
                        />
                    </motion.div>

                    <motion.div className="attachments" variants={itemVariants}>
                        <div className="file-dropzone flex flex-col gap-1">
                            <p className="text-gray-500 text-base">
                                Optional attachment (image or PDF) for better review.
                            </p>

                            <Dropzone
                                onFileSelect={(file) => handleChange("attachment", file)}
                            />
                        </div>

                        <CountrySelect
                            value={formData.country}
                            onChange={(val) => handleChange("country", val)}
                        />
                    </motion.div>

                    <motion.button
                        type="button"
                        className="btn-request-consulting"
                        aria-label="Request Consultation"
                        variants={itemVariants}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? (
                            <p>Sending...</p>
                        ) : (
                            <>
                                <img src={sent} alt="sent" />
                                <p>Request Consultation</p>
                            </>
                        )}
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Services;
