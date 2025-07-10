import React from "react";

interface StepModalProps {
  title: string;
  description: string;
  details?: string;
  resource?: string;
  category?: string;
  estimatedTime?: string;
  onClose: () => void;
}

const StepModal: React.FC<StepModalProps> = ({
  title,
  description,
  details,
  resource,
  category,
  estimatedTime,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black text-2xl font-light"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          ისწავლე {title}-ის შესახებ
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

        {details && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {details}
          </p>
        )}

        {resource && (
          <a
            href={resource}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-blue-600 hover:underline mb-4"
          >
            Learn more ↗
          </a>
        )}

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {category && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
              🏷️ {category}
            </span>
          )}
          {estimatedTime && (
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              ⏱️ {estimatedTime}
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepModal;
