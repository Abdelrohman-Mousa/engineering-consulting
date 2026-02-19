import "./request-details-modal.scss";
import close from "/assets/icons/closed.svg";
import userConsulting from "/assets/icons/user-consulting.svg";
import dateIcon from "/assets/icons/dateTime.svg";
import country from "/assets/icons/flagCountry.svg";
import level from "/assets/icons/level.png";
import { formatDate } from "~/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import pdfIcon from "/assets/images/pdfIcon.jpg"
import {useState} from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import sendIcone from "/public/assets/icons/sent.svg";

const RequestDetailsModal = ({ request, onClose, onChangeStatus  }: any) => {
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSendEmail = async () => {
        if (!request?.email) {
            toast.error("Client email not found");
            return;
        }

        if (!message) {
            toast.error("Write message first");
            return;
        }

        setSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                {
                    to_email: request.email,
                    client_name: request.name,
                    message: message,
                },
                import.meta.env.VITE_EMAIL_KEY
            );

            toast.success("Email Sent Successfully");
            setMessage("");
        } catch (error) {
            console.error(error);
            toast.error("Failed to send email");
        } finally {
            setSending(false);
        }
    };


    const capitalize = (text: string) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (
        <AnimatePresence>
            {request && (
                <motion.div
                    className="modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: 40, scale: 0.9, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 40, scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="consulting-modal-header">
                            <h2>Consultation Request</h2>
                            <button className="close-btn" onClick={onClose}>
                                <img src={close} alt="close" />
                            </button>
                        </div>

                        <div className="consulting-info">
                            <div className="consulting-info-name">
                                <img src={userConsulting} alt="user" />
                                <h3>{capitalize(request.name)}</h3>
                            </div>

                            <div className="consulting-info-date">
                                <img src={dateIcon} alt="date" />
                                <p>{formatDate(request.createdAt)}</p>
                            </div>

                            <div className="consulting-info-priority">
                                <img src={level} alt="country" />
                                <p>{capitalize(request.priority)}</p>
                            </div>

                            <div className="consulting-info-country">
                                <img src={country} alt="country" />
                                <p>{request.country}</p>
                            </div>
                        </div>

                        <div className="consulting-desc-type">
                            <div className="consulting-desc">
                                <h3>Description:</h3>
                                <p>{capitalize(request.description)}</p>
                            </div>

                            <div className="consulting-type">
                                <h3>Consulting Type:</h3>
                                <p>{capitalize(request.consultingType)}</p>
                            </div>
                        </div>

                        <div className="consulting-attachment">
                           <div className="attachment">
                                {request.attachment ? (
                                    request.attachment.endsWith(".pdf") ? (
                                        // PDF يظهر كأيقونة، قابل للنقر
                                        <a
                                            href={request.attachment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                          <img className="img-pdf" src={pdfIcon} alt="pdf"/>
                                        </a>
                                    ) : (
                                        // الصور تظهر مباشرة
                                        <img
                                            src={request.attachment}
                                            alt="attachment"
                                            className="img-attachment"
                                        />
                                    )
                                ) : (
                                    <span>No attachment</span>
                                )}
                           </div>

                            <div className="consulting-reply">
                                <h3>Reply to Client</h3>

                                <textarea
                                    placeholder="Write your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />

                                <button onClick={handleSendEmail} disabled={sending}>
                                    <img src={sendIcone} alt="send email" />
                                    {sending ? "Sending..." : "Send Email"}
                                </button>
                            </div>
                        </div>

                        <div className="consulting-status-btn">
                            <p>Update the request status to reflect its current progress.</p>
                            <div className="consulting-status">
                                <button className="progress" onClick={() => onChangeStatus(request.id, "in_progress")}>
                                    InProgress
                                </button>

                                <button className="completed" onClick={() => onChangeStatus(request.id, "completed")}>
                                    Completed
                                </button>

                                <button className="rejected" onClick={() => onChangeStatus(request.id, "rejected")}>
                                    Rejected
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RequestDetailsModal;
