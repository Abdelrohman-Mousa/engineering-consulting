import './message-contact.scss';
import {ShinyButton} from "~/components/ui/shiny-button";
import ButtonMessageMenu from "../../../../src/material-ui/ButtonMessageMenu";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import ActionTemplate from "~/routes/dashboard/messages/actionTemplate/ActionTemplate";
import {cn, formatDate} from "~/lib/utils";
import {useEffect, useRef, useState} from "react";
import {getMessages} from "../../../../src/auth/getMessages";
import closed from "/assets/icons/closed.svg";
import copy from "/assets/icons/copy.svg";
import check from "/assets/icons/check2.svg";
import CircularIndeterminate from "~/components/CircularIndeterminate";

interface Message {
    id?: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    company: string;
    message: string;
    createdAt?: any;
    status?: "New" | "Read" | "Closed";
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
    const isFirstLoad = useRef(true);

    const loadMessages = async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        const res = await getMessages({
            pageSize: 10,
            lastDoc,
        });

        setMessages(prev => {
            const newMessages = res.messages.filter(
                msg => !prev.some(p => p.id === msg.id)
            );
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
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedMessage.email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500); // يرجع للأيقونة الأصلية بعد 1.5 ثانية
    };

    const withFallback = (value?: string, fallback = "Not provided") =>
        value && value.trim() !== "" ? value : fallback;

    return (
        <div className="message-contact">
            <div className="title-message-contact">
                <div className="subject-message">
                   <h1>Incoming Contact Messages</h1>
                   <p>Displays all user messages, allowing admins to review inquiries and respond efficiently.</p>
                </div>
                <div className="btn-message-container">
                    <ShinyButton>New: 5</ShinyButton>
                </div>
            </div>

            <div className="search-menu-container">
                <div className="search-section">
                   <input type="text" placeholder="Search by name.." />
                </div>

                <div className="menu-section">
                    <ButtonMessageMenu />
                </div>
            </div>

            <GridComponent dataSource={messages} gridLines="None" className="px-2">
               <ColumnsDirective>
                   <ColumnDirective
                       field="name"
                       headerText="Client Name"
                       textAlign="Left"
                       width="150"
                       template={(props: any) => (
                           <div className="flex items-center gap-1.5">
                               {/*<img src={props.imageUrl} alt="users" className="rounded-full size-8 aspect-square none" referrerPolicy="no-referrer"/>*/}
                               <p className="text-base font-normal">{props.name}</p>
                           </div>
                       )}
                   />

                   <ColumnDirective
                       field="subject"
                       headerText="Subject"
                       textAlign="Left"
                       width="150"
                   />

                   <ColumnDirective
                       field="createdAt"
                       headerText="Date"
                       textAlign="Left"
                       width="120"
                       template={({createdAt}: { createdAt: string}) =>
                           formatDate(createdAt)}
                   />

                   <ColumnDirective
                       field="status"
                       headerText="Status"
                       textAlign="Left"
                       width="100"
                       template={({status}: any ) => (
                           <article className={cn('status-column', status === "new" ? "bg-green-100" : status === "Read" ? "bg-blue-100" : "bg-gray-200")}>
                               <div className={cn('size-1.5 rounded-full', status === "new" ? "bg-green-700" : status === "Read" ? "bg-blue-700" : "bg-gray-900")} />
                                   <h3 className={cn('font-inter text-xs font-medium', status === "new" ? "text-green-900" : status === "Read" ? "text-blue-900" : "text-gray-600")}>
                                       {status}
                                   </h3>

                           </article>
                       )}
                   />

                   <ColumnDirective
                       headerText="Action"
                       textAlign="Left"
                       width="100"
                       template={(props: Message) => (
                           <ActionTemplate rowData={props} onView={handleView} />
                       )}
                   />
               </ColumnsDirective>
            </GridComponent>
            {hasMore && (
                <button onClick={loadMessages} disabled={loading} className="btn-load-more">
                    {loading ? <CircularIndeterminate/> : "Load More"}
                </button>
            )}

            {/*=============Model=============*/}
            <div>
                {open && selectedMessage && (
                    <div className="modal-overlay"
                         style={{ display: open ? "flex" : "none" }}
                         onClick={() => setOpen(!open)}
                    >
                        <div
                            className={`modal ${open ? "modal-open" : ""}`}
                            onClick={(e) => e.stopPropagation()} // يمنع الحدث من الوصول للـ overlay عند الضغط داخل المودال
                        >
                            <div className="modal-container">
                                <div className="modal-title">
                                    <h3>Message Details</h3>
                                    <button onClick={() => setOpen(false)} className="modal-btn-close">
                                        <img src={closed} className="size-8" alt="Close" />
                                    </button>
                                </div>

                                <div className="modal-info-details">
                                   <div className="modal-name-users-date">
                                       <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMessage.name)}&background=010101&color=fff`}
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
                                          <p className="modal-message">{withFallback(selectedMessage.subject, "No subject provided")}</p>
                                      </div>

                                       <div className="modal-company-message">
                                           <span className="span-modal">Company:</span>
                                           <p className="modal-message">{withFallback(selectedMessage.company, "No company specified")}</p>
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
                                                <button className="btn-copy" onClick={handleCopy}>
                                                    <img src={copied ? check : copy} alt="Copy" />
                                                </button>
                                            </p>
                                        </div>

                                        <div className="modal-phone-message">
                                            <span className="span-modal">Phone Number:</span>
                                            <p className="modal-message"> {withFallback(selectedMessage.phone, "No phone number provided")}</p>
                                        </div>
                                    </div>

                                    <div className="modal-btn-read-closed">
                                        <div className="btn-read-message">
                                            <button className="btn-read">Mark as Read</button>
                                        </div>

                                        <div className="btn-closed-message">
                                            <button className="btn-closed">Mark as Closed</button>
                                        </div>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/*=============Model=============*/}

        </div>
    )
}
export default MessageContact
