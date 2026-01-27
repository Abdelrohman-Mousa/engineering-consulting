import './message-contact.scss';
import { ShinyButton } from "~/components/ui/shiny-button";
import ButtonMessageMenu from "/src/material-ui/ButtonMessageMenu";
import { ColumnDirective, ColumnsDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import ActionTemplate from "~/routes/dashboard/messages/actionTemplate/ActionTemplate";
import { cn, formatDate } from "~/lib/utils";
import { useEffect, useRef, useState } from "react";
import { getMessages } from "../../../../src/auth/getMessages";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import closed from "/assets/icons/closed.svg";
import copy from "/assets/icons/copy.svg";
import check from "/assets/icons/check2.svg";
import search from "/assets/icons/search.svg";
import CircularIndeterminate from "~/components/CircularIndeterminate";
import toast from "react-hot-toast";
import type { MessageFilter, MessageStatus } from "/src/types/message";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id?: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    company: string;
    message: string;
    createdAt?: any;
    status?: MessageStatus;
    imageUrl?: string;
}

const MessageContact = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [lastDoc, setLastDoc] = useState<any>(null);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [statusLoading, setStatusLoading] = useState<"read" | "closed" | null>(null);
    const [newCount, setNewCount] = useState<number>(0);
    const [activeFilter, setActiveFilter] = useState<MessageFilter>("All");
    const [searchEmail, setSearchEmail] = useState<string>("");

    const isFirstLoad = useRef(true);

    const loadMessages = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        const res = await getMessages({ pageSize: 10, lastDoc });
        setMessages(prev => {
            const newMessages = res.messages.filter(msg => !prev.some(p => p.id === msg.id));
            return [...prev, ...newMessages];
        });

        setLastDoc(res.lastDoc);
        setHasMore(res.hasMore);
        setLoading(false);
    };

    useEffect(() => {
        if (!isFirstLoad.current) return;
        isFirstLoad.current = false;
        loadMessages();
    }, []);

    const handleView = (rowData: Message) => {
        setSelectedMessage(rowData);
        setOpen(true);
        if (rowData.status === "new") handleStatusChange("read");
    };

    const handleStatusChange = async (newStatus: MessageStatus) => {
        if (!selectedMessage?.id) return;
        try {
            setStatusLoading(newStatus);
            const messageRef = doc(db, "messages", selectedMessage.id);
            await updateDoc(messageRef, { status: newStatus, updatedAt: new Date() });

            setMessages(prev =>
                prev.map(msg => (msg.id === selectedMessage.id ? { ...msg, status: newStatus } : msg))
            );
            setSelectedMessage(prev => (prev ? { ...prev, status: newStatus } : prev));
            toast.success(`Message marked as ${newStatus}`);
        } catch (error) {
            console.error(error);
            toast.error("Failed to update message status");
        } finally {
            setStatusLoading(null);
        }
    };

    const handleCopy = () => {
        if (!selectedMessage?.email) return;
        navigator.clipboard.writeText(selectedMessage.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    useEffect(() => {
        const count = messages.filter(msg => msg.status === "new").length;
        setNewCount(count);
    }, [messages]);

    const withFallback = (value?: string, fallback = "Not provided") =>
        value && value.trim() !== "" ? value : fallback;

    const filteredMessages = messages.filter(msg => {
        const matchesFilter = activeFilter === "All" || msg.status?.toLowerCase() === activeFilter.toLowerCase();
        const matchesSearch = msg.email.toLowerCase().includes(searchEmail.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="message-contact">
            <div className="title-message-contact">
                <div className="subject-message">
                    <h1>Incoming Contact Messages</h1>
                    <p>Displays all user messages, allowing admins to review inquiries and respond efficiently.</p>
                </div>
                <div className="btn-message-container">
                    <ShinyButton>New: {newCount}</ShinyButton>
                </div>
            </div>

            <div className="search-menu-container">
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Search by email.."
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                    />
                    <img src={search} alt="search" className="search-icon" />
                </div>
                <div className="menu-section">
                    <ButtonMessageMenu onFilterChange={setActiveFilter} />
                </div>
            </div>

            <GridComponent dataSource={filteredMessages} gridLines="None">
                <ColumnsDirective>
                    <ColumnDirective
                        field="name"
                        headerText="Client Name"
                        textAlign="Left"
                        width="150"
                        template={(props: any) => <p className="text-base font-normal">{props.name}</p>}
                    />
                    <ColumnDirective
                        field="subject"
                        headerText="Subject"
                        textAlign="Left"
                        width="150"
                        template={(props: Message) => <p className="text-base font-normal">{withFallback(props.subject)}</p>}
                    />
                    <ColumnDirective
                        field="createdAt"
                        headerText="Date"
                        textAlign="Left"
                        width="120"
                        template={({ createdAt }: { createdAt: string }) => formatDate(createdAt)}
                    />
                    <ColumnDirective
                        field="status"
                        headerText="Status"
                        textAlign="Left"
                        width="100"
                        template={({ status }: any) => (
                            <article className={cn('status-column', status === "new" ? "bg-green-100" : status === "read" ? "bg-blue-100" : "bg-gray-200")}>
                                <div className={cn('size-1.5 rounded-full', status === "new" ? "bg-green-700" : status === "read" ? "bg-blue-700" : "bg-gray-900")} />
                                <h3 className={cn('font-inter text-xs font-medium', status === "new" ? "text-green-900" : status === "read" ? "text-blue-900" : "text-gray-600")}>{status}</h3>
                            </article>
                        )}
                    />
                    <ColumnDirective
                        headerText="Action"
                        textAlign="Left"
                        width="100"
                        template={(props: Message) => <ActionTemplate rowData={props} onView={handleView} />}
                    />
                </ColumnsDirective>
            </GridComponent>

            {hasMore && (
                <button type="button" onClick={loadMessages} disabled={loading} className="btn-load-more">
                    {loading ? <CircularIndeterminate /> : "Load More"}
                </button>
            )}

            {/* Modal */}
            <AnimatePresence>
                {open && selectedMessage && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            className="modal"
                            initial={{ y: -50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -50, opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-container">
                                <div className="modal-title">
                                    <h3>Message Details</h3>
                                    <button type="button" onClick={() => setOpen(false)} className="modal-btn-close">
                                        <img src={closed} className="size-8" alt="Close" />
                                    </button>
                                </div>

                                <div className="modal-info-details">
                                    <div className="modal-name-users-date">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMessage.name)}&background=010101&color=fff`}
                                            alt="user name"
                                            className="rounded-full size-12 aspect-square"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="modal-name-date">
                                            <h3>{selectedMessage.name}</h3>
                                            <p><strong>Sent:</strong> {formatDate(selectedMessage.createdAt)}</p>
                                        </div>
                                    </div>

                                    <div className="modal-subject-company">
                                        <div className="modal-subject-message">
                                            <span className="span-modal">Subject:</span>
                                            <p className="modal-message">{withFallback(selectedMessage.subject)}</p>
                                        </div>
                                        <div className="modal-company-message">
                                            <span className="span-modal">Company:</span>
                                            <p className="modal-message">{withFallback(selectedMessage.company)}</p>
                                        </div>
                                    </div>

                                    <div className="modal-message-details">
                                        <span className="span-modal">Message:</span>
                                        <p className="modal-message">{selectedMessage.message}</p>
                                    </div>

                                    <div className="modal-email-phone">
                                        <div className="modal-email-message">
                                            <span className="span-modal">Email:</span>
                                            <p className="modal-message email-message">
                                                {selectedMessage.email}
                                                <button type="button" className="btn-copy" onClick={handleCopy}>
                                                    <img src={copied ? check : copy} alt="Copy" />
                                                </button>
                                            </p>
                                        </div>
                                        <div className="modal-phone-message">
                                            <span className="span-modal">Phone Number:</span>
                                            <p className="modal-message">{withFallback(selectedMessage.phone)}</p>
                                        </div>
                                    </div>

                                    <div className="modal-btn-read-closed">
                                        <div className="btn-read-message">
                                            <button
                                                type="button"
                                                className="btn-read"
                                                disabled={selectedMessage?.status === "read" || statusLoading === "read"}
                                                onClick={() => handleStatusChange("read")}
                                            >
                                                {statusLoading === "read" ? "Marking..." : "Mark as Read"}
                                            </button>
                                        </div>
                                        <div className="btn-closed-message">
                                            <button
                                                type="button"
                                                className="btn-closed"
                                                disabled={selectedMessage?.status === "closed" || statusLoading === "closed"}
                                                onClick={() => handleStatusChange("closed")}
                                            >
                                                {statusLoading === "closed" ? "Closing..." : "Mark as Closed"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MessageContact;
