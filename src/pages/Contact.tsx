import {
  InstagramLogo,
  LinkedinLogo,
  MapPinSimpleArea,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Header from "../components/Header";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <h2 className="text-xl lg:text-2xl text-center mt-14 text-white">
        Contato
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center lg:justify-around min-h-vh min-w-full px-8 mb-8">
        <div className="flex flex-col items-center lg:w-1/2 px-4">
          <p className="mb-4 text-white">Fale conosco:</p>
          <div className="w-full mx-4 bg-gradient-to-r from-gradient-purple to-gradient-orange rounded-xl px-4 py-2 lg:p-8 shadow-md">
            <ContactForm />
          </div>
          <p className="w-full mt-2 text-white justify-start flex flex-col lg:flex-row gap-2 lg:justify-around text-sm">
            <a
              href="http://wa.me/5527992772143?text=%20Gostaria%20de%20saber%20mais%20informações"
              target="_blank"
              className="text-white flex flex-row items-center gap-2"
            >
              <WhatsappLogo size={22} /> Whatsapp
            </a>
            <a
              href="http://"
              target="_blank"
              className="text-white flex flex-row items-center gap-2"
            >
              <InstagramLogo size={22} /> Instagram
            </a>
            <a
              href="http://"
              target="_blank"
              className="text-white flex flex-row items-center gap-2"
            >
              <LinkedinLogo size={22} /> Instagram
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/2 px-4">
          <p className="mb-4 text-white">Nos encontre no endereço abaixo:</p>
          <Map />
          <div className="w-full flex flex-row items-center justify-start gap-2 mt-2">
            <MapPinSimpleArea size={32} color="white" />
            <div className="flex flex-col lg:flex-row gap-1">
              <p className="mt-2 text-white text-sm">Rua Santa Luzia, 1004, </p>
              <p className="mt-2 text-white text-sm">
                {" "}
                Bairro das Laranjeiras/Jacaraípe,{" "}
              </p>
              <p className="mt-2 text-white text-sm"> Serra - ES, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
