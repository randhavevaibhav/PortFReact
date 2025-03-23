import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../pages/Contact/contactFormSchema";
import axios from "axios";
import { Modal } from "../common/Modal/Modal";
import loadingGIF from "../../assets/images/Loading_GIF.gif";
import toast, { Toaster } from "react-hot-toast";
export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data) => {
    // console.log("form data ===> ", data);

    setIsLoading(true);
    setIsModalOpen(true);

    axios
      .post(
        `https://email-js-api.vercel.app/mail`,
        {
          name: data.name,
          email: data.user_mail,
          message: data.message,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log("result ===> ", res);
        toast.success(`Message send successfully !`);
      })
      .catch((err) => {
        console.log("result ===> ", err);
        toast.error(`Something went wrong !`);
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalOpen(false);
        reset();
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" lg:order-first order-last md:px-8 px-4 py-4 flex flex-col gap-4  w-full "
        ref={formRef}
      >
        <header className="flex items-center md:pt-2 md:pb-4 pb-2 py-1 gap-4  border-b-2 border-gray-500">
          <h1 className="md:text-3xl text-2xl font-bold tracking-wide">
            Get in touch
          </h1>
          <span className="text-4xl">👋</span>
        </header>

        <div className="input_container flex flex-col gap-1">
          <label
            htmlFor="name"
            className=" md:text-lg font-semibold tracking-wide"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Name"
            className={`px-2 md:py-2 py-1 text-black rounded-md outline-none  border-2   placeholder-gray-800 ${
              errors.name?.message
                ? `border-red-500`
                : `border-themeborder focus:outline-[#1F51FF] focus:border-none`
            }`}
            {...register("name")}
            disabled={isLoading}
          />
          {errors.name?.message && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="input_container flex flex-col gap-1">
          <label
            htmlFor="email"
            className=" md:text-lg font-semibold tracking-wide"
          >
            Email:{" "}
          </label>
          <input
            placeholder="Email"
            className={`md:py-2 py-1 px-2 text-black rounded-md outline-none  border-2  placeholder-gray-800  ${
              errors.user_mail?.message
                ? `border-red-500`
                : `border-themeborder focus:outline-[#1F51FF] focus:border-none`
            }`}
            {...register("user_mail")}
            disabled={isLoading}
          />
          {errors.user_mail?.message && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.user_mail?.message}
            </p>
          )}
        </div>
        <div className="textarea_container flex flex-col gap-1">
          <label
            htmlFor="message"
            className="md:text-lg font-semibold tracking-wide"
          >
            Message:{" "}
          </label>
          <textarea
            rows={3}
            className="p-2  text-black rounded-md outline-none dark:border-none border border-themeborder placeholder-gray-800 focus:outline-[#1F51FF] focus:border-none"
            placeholder="Message"
            {...register("message")}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`md:px-5 md:py-3 py-2 px-2 border-themeborder border rounded-md font-bold inline-flex leading-none  bg-background hover:border-primary ${
              isLoading ? `cursor-not-allowed` : ``
            }`}
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>

      <Modal
        isOpen={true}
        onClose={() => setIsModalOpen(false)}
        title={`💬 Sending message please wait ...`}
        isCloseable={false}
      >
        <div className="flex items-center justify-center">
          <img
            src={loadingGIF}
            alt="loading gif"
            className="object-cover rounded-lg w-56"
          />
        </div>
      </Modal>
      <Toaster />
    </>
  );
};
