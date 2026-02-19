import "./consultation-requests.scss";
import eye from "/assets/icons/eye2.svg";
import deleteIcon from "/assets/icons/delete.svg";
import doneIcon from "/assets/icons/check2.svg";
import { db } from "src/config/firebase";
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import {useState, useEffect} from "react";
import {formatDate} from "~/lib/utils";
import toast from "react-hot-toast";
import DeleteConfirm from "./DeleteConfirm";
import RequestDetailsModal from "./request-details-modal/RequestDetailsModal";

const ConsultationRequests = () => {
    const [requests, setRequests] = useState<any[]>([]);
    const [removingId, setRemovingId] = useState<string | null>(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedRequest, setSelectedRequest] = useState(null);


    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "consultations"),
            (snapshot) => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRequests(data);
            },
            (error) => {
                console.error("Error fetching requests:", error);
            }
        );

        // Cleanup function
        return () => unsubscribe();
    }, []);

    const confirmDelete = (id: string) => {
        setSelectedId(id);
        setDialogVisible(true);
    };

    // Delete
    const handleDelete = async () => {
        if (!selectedId) return;

        setRemovingId(selectedId); // animation

        setTimeout(async () => {
            try {
                await deleteDoc(doc(db, "consultations", selectedId));
                toast.success("Request deleted successfully!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to delete request.");
            } finally {
                setDialogVisible(false);
                setRemovingId(null);
            }
        }, 300);
    };


    const capitalize = (text: string) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const ref = doc(db, "consultations", id);
            await updateDoc(ref, {
                status: newStatus,
            });
            toast.success("Status updated!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update status");
        }
    };

    const statusCounts = requests.reduce(
        (acc, req) => {
            const status = req.status || "pending";
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );



    return (
        <div className="consultation-requests-admin">
            <DeleteConfirm
                open={dialogVisible}
                onConfirm={handleDelete}
                onCancel={() => setDialogVisible(false)}
            />
            <div className="title-consultation-requests">
                <h1>Engineering Consulting Requests Dashboard</h1>
                <p>
                    A centralized dashboard to monitor and manage consulting requests efficiently and support better decision-making.
                </p>
            </div>

            <div className="status-counters">
                <div className="counter pending">
                    Pending:<span> {statusCounts["pending"] || 0}</span>
                </div>
                <div className="counter in_progress">
                    In Progress: <span>{statusCounts["in_progress"] || 0}</span>
                </div>
                <div className="counter completed">
                    Completed: <span>{statusCounts["completed"] || 0}</span>
                </div>
                <div className="counter rejected">
                    Rejected: <span>{statusCounts["rejected"] || 0}</span>
                </div>
            </div>


            <div className="consultation-requests-boxes">
                {requests.map(request => (
                    <div className={`consultation-request-box ${removingId === request.id ? "removing" : ""}`} key={request.id}>
                        <div className="consultation-request-header">
                            <h2>{request.name}</h2>
                            <p className={`consultation-request-priority ${request.priority}`}>
                                {capitalize(request.priority)}
                            </p>
                        </div>
                        <div className="consultation-request-content">
                            <h2>{capitalize(request.consultingType)}</h2>
                            <h2>{request.email}</h2>
                            <h2>
                                {formatDate(request.createdAt)}
                            </h2>
                            <div className="consulting-country-status">
                              <h2>{request.country}</h2>
                              <h2 className={`consulting-status ${request.status}`}>
                                  {request.status}
                              </h2>
                            </div>
                        </div>

                        <div className="consultation-request-buttons">

                            <button
                                className="request-btn"
                                onClick={() => setSelectedRequest(request)}
                            >
                                <img src={eye} alt="eye" />
                                <p>Details</p>
                            </button>

                            <button
                                className="request-btn delete"
                                onClick={() => confirmDelete(request.id)}
                            >
                                <img src={deleteIcon} alt="delete"/>
                                <p>Delete</p>
                            </button>

                            <button
                                className="request-btn done"
                                disabled={request.status === "completed"}
                                onClick={() => updateStatus(request.id, "completed")}
                            >
                            <img src={doneIcon} alt="done" />
                              <p>Done</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedRequest && (
                <RequestDetailsModal
                    request={selectedRequest}
                    onClose={() => setSelectedRequest(null)}
                    onChangeStatus={updateStatus}
                />
            )}

        </div>
    )
}
export default ConsultationRequests
