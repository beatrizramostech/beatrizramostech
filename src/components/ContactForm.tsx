import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const schema = z.object({
  user_name: z.string().nonempty("Nome é obrigatório"),
  user_email: z
    .string()
    .email("E-mail inválido")
    .nonempty("E-mail é obrigatório"),
  phone: z
    .string()
    .min(14, "Telefone deve estar no formato (XX) XXXXX-XXXX")
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      "Telefone deve estar no formato (XX) XXXXX-XXXX"
    ),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const [contactNumber, setContactNumber] = useState(2546);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: "",
    description: "",
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      name: data.user_name,
      email: data.user_email,
      message: data.message + " - " + data.phone,
      contact_number: contactNumber,
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      );
      setContactNumber((previous) => previous + 1);
      setModalMessage({
        title: "Sucesso!",
        description: "Formulário enviado!",
      });
      reset();
    } catch (error) {
      setModalMessage({
        title: "Sentimos muito!",
        description: "Houve um erro inesperado ao enviar.",
      });
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 px-2 flex flex-col justify-center items-center w-full"
      >
        <div className="w-full">
          <label
            htmlFor="user_name"
            className="block text-md font-medium text-gray-800"
          >
            Nome
          </label>
          <input
            id="name"
            {...register("user_name")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-focus focus:ring-orange-focus sm:text-sm py-1"
          />
          {errors.user_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.user_name.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="user_email"
            className="block text-md font-medium text-gray-800"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            {...register("user_email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-focus focus:ring-orange-focus sm:text-sm py-1"
          />
          {errors.user_email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.user_email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-md font-medium text-gray-800"
          >
            Telefone
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 99999-9999"
                maskChar={null}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-focus focus:ring-orange-focus sm:text-sm py-1"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-md font-medium text-gray-800"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="resize-none h-20 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-focus focus:ring-orange-focus sm:text-sm"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="items-center justify-center max-w-48 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-background-color hover:bg-orange-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background-color"
        >
          Enviar
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalMessage}
      />
    </>
  );
};

export default ContactForm;
