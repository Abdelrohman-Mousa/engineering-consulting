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
import emailjs from "emailjs-com";
import {useTranslation} from "react-i18next";



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

const uploadToCloudinary = async (file: File) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "consultations_upload"); // تأكد من اسم preset صحيح
    formData.append("folder", "consultations"); // اختياري
    formData.append("resource_type", "auto"); // مهم للصور أو PDF أو أي نوع

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dztxccrnl/auto/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    if (!res.ok) throw new Error("Upload failed");

    const data = await res.json();
    return data.secure_url ?? null;
};

const Services = () => {
    const { t } = useTranslation();

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

    const sendConfirmationEmail = async () => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    consulting_type: formData.consultingType,
                    priority: formData.priority,
                    message: formData.description,
                },
                import.meta.env.VITE_EMAIL_KEY
            );
        } catch (error) {
            console.error("Email failed:", error);
        }
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
            let attachmentUrl: string | null = null;

            if (formData.attachment && formData.attachment instanceof File) {
                attachmentUrl = await uploadToCloudinary(formData.attachment);
            }

            await addDoc(collection(db, "consultations"), {
                ...formData,
                attachment: attachmentUrl,
                createdAt: serverTimestamp(),
                status: "pending",
            });

            await sendConfirmationEmail();


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
                <h1>{t("consultingTitle")}</h1>
                <p>{t("consultingPragraph")}</p>
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
                                {t("consultingImageOrPdf")}
                            </p>

                            <Dropzone
                                onFileSelect={(file) => handleChange("attachment", file)}
                                accept="image/*,.pdf,.doc,.docx" // أمثلة على الملفات المسموح بها
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
                                <p>{t("RequestConsultation")}</p>
                            </>
                        )}
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Services;
