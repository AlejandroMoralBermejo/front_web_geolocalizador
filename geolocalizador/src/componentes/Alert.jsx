import React from "react";
import { XCircle, CheckCircle, AlertTriangle } from "lucide-react";

const Alert = ({ type = "info", message, onClose }) => {
  const alertStyles = {
    success: "bg-alert-success border-borderAlert-success text-textAlert-success",
    error: "bg-alert-error border-borderAlert-error text-textAlert-error",
    warning: "bg-alert-warning border-borderAlert-warning text-textAlert-warning",
    info: "bg-alert-info border-borderAlert-info text-textAlert-info",
  };

  const icons = {
    success: <CheckCircle className="text-textAlert-success" size={20} />,
    error: <XCircle className="text-textAlert-error" size={20} />,
    warning: <AlertTriangle className="text-textAlert-warning" size={20} />,
    info: <AlertTriangle className="text-textAlert-info" size={20} />,
  };

  return (
    <div
      className={`flex items-center p-3 border-l-4 rounded-lg shadow-md ${alertStyles[type]} mb-4`}
    >
      <span className="mr-3">{icons[type]}</span>
      <p className="flex-1 text-sm font-semibold">{message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-gray-600 hover:text-gray-800 transition"
      >
        ✖
      </button>
    </div>
  );
};

export default Alert;
