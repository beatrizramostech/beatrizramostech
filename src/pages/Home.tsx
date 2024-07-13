import React, { useState } from "react";
import Modal from "../components/Modal";
import { services } from "../assets/services";
import logo from "../assets/logo.png";
import Header from "../components/Header";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: [""],
  });

  const openModal = (content: { title: string; description: string[] }) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around min-h-lvh min-w-full p-4">
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={logo}
            alt="Logo Beatriz Ramos Tech"
            className="w-60 h-60 lg:w-128 lg:h-128"
          />
        </div>

        <div className="mt-4 lg:mt-0">
          <div className="bg-gradient-to-r from-gradient-purple to-gradient-orange rounded-xl p-4 lg:p-8 shadow-md">
            <h2 className="text-xl lg:text-2xl text-center lg:text-left text-gray-800 mb-4">
              Nossos Serviços:
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md text-center lg:text-left my-2 cursor-pointer"
                  onClick={() => openModal(service)}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
        />
      </div>
    </>
  );
};

export default Home;
