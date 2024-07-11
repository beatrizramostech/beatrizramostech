const Modal: React.FC<{ isOpen: boolean, onClose: () => void, content: { title: string, description: string[] } }> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl mb-4">{content.title}</h2>
        <ul className="list-green-disc pl-5 space-y-2">
          {content.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Fechar</button>
      </div>
    </div>
  );
};

export default Modal;