import { XCircle } from "@phosphor-icons/react";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  content: { title: string; description: string[] | string };
}> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-xl">{content.title}</h2>
          <button onClick={onClose} className="text-red">
            <XCircle size={32} />
          </button>
        </div>
        {Array.isArray(content.description) ? (
          <ul className="list-green-disc pl-5 space-y-2">
            {content.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="">
            {content.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
