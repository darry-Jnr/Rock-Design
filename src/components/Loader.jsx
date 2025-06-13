// src/components/Loader.jsx
const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#003152] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-[#003152] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-[#003152] rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Loader;
