import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

const Modal: React.FC<ModalProps> = ({ title, message, isError, setIsModalVisible }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsModalVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className={`w-80 rounded-3xl border bg-black-200 p-10 shadow-lg md:w-96 ${
          isError ? "border-red-500" : "border-green-500"
        }`}
      >
        <div ref={modalRef}>
          <div className="text-center">
            <h2
              className={`mb-2 text-2xl font-semibold ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {title}
            </h2>
            <p className="text-sm text-secondary">{message}</p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsModalVisible(false)}
              className={`rounded-lg border px-6 py-2 font-semibold text-white transition duration-300 ${
                isError ? "border-red-500 hover:bg-red-600" : "border-green-500 hover:bg-green-600"
              }`}
            >
              {isError ? "Retry!" : "Okay."}
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Modal;
