import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../pages/Contact/contactFormSchema";
import emailjs from "@emailjs/browser";
export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    console.log("form data ===> ", data);
    console.log("formRef.current data ===> ", formRef.current);
    setIsLoading(true);

    emailjs
      .sendForm("service_a33pcif", "template_f4ebpc3", formRef.current, {
        publicKey: "IprBFL0utl8tmQ47H",
      })
      .then((res) => {
        console.log("result ===> ", res);
      })
      .catch((err) => {
        setFormError(err);
        console.log("result ===> ", err);
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:order-first order-last p-2 flex flex-col md:gap-4 gap-2 w-full"
        ref={formRef}
      >
        <header className="md:py-2 py-1">
          <h1 className="md:text-3xl text-2xl font-bold tracking-wide">
            Get in touch
          </h1>
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
            className="px-2 md:py-2 py-1 text-black rounded-md outline-none dark:border-none border border-gray-300"
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
            type="email"
            placeholder="Email"
            className="md:py-2 py-1 px-2 text-black rounded-md outline-none dark:border-none border border-gray-300"
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
            className="p-2  text-black rounded-md outline-none dark:border-none border border-gray-300 "
            placeholder="Message"
            {...register("message")}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`md:px-5 md:py-3 py-2 px-2 border-themeborder border rounded-md font-bold inline-flex leading-none  bg-background hover:border-primary ${
              isLoading ? `cursor-not-allowed` : ""
            }`}
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
        {formError ? (
          <p className="text-red-500 font-semibold tracking-wide text-sm">
            Error while submitting form
          </p>
        ) : null}
      </form>
    </>
  );
};
