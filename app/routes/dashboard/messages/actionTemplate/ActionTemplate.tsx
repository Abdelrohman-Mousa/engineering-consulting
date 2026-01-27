import React from "react";
import "./actionTemplate.scss";

interface Message {
    name: string;
    email: string;
    subject: string;
    message: string;
    date?: string;
    status?: string;
}
interface ActionTemplateProps {
    rowData: Message;
    onView: (rowData: Message) => void;
}

const ActionTemplate: React.FC<ActionTemplateProps> = ({ rowData, onView }) => {
    return (
        <div className="action-template">
            <button
                type="button"
                className="action-btn"
                onClick={() => {onView(rowData)}}
            >
               View Details
            </button>
        </div>
    )
}
export default ActionTemplate
